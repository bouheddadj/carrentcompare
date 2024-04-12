import React from 'react';
import { useEffect, useRef, useState } from 'react';
import AddressAutocomplete from './AddressAutocomplete.js'
import { calculateS, calculateM, calculateL, calculateXL, calculateXXL } from './functions-citiz.js';
import { calculatecitadinsetpetitutilitaire, calculateutilitaire6m3 } from './function-leo.js';

const Main = (props) => {

        const [time1, setTime1] = useState(null);
        const [time2, setTime2] = useState(null);
        const [duree, setDuree] = useState(null);
        const [distance, setDistance] = useState(null);
        const [results, setResults] = useState([]);

        const inputRef = useRef();

        useEffect(() => {
            const picker1 = new window.tempusDominus.TempusDominus(
                document.querySelector('input[name="time-1"]'),{
                        display: {
                                theme: 'light',
                                icons: {
                                        time: 'bi bi-clock',
                                        date: 'bi bi-calendar',
                                        up: 'bi bi-arrow-up',
                                        down: 'bi bi-arrow-down',
                                        previous: 'bi bi-chevron-left',
                                        next: 'bi bi-chevron-right',
                                        today: 'bi bi-calendar-check',
                                        clear: 'bi bi-trash',
                                        close: 'bi bi-x',
                                      },
                                      buttons: {
                                        today: true,
                                        clear: true,
                                        close: true, 
                                      },
                              }
                }
            );

            const picker2 = new window.tempusDominus.TempusDominus(
                document.querySelector('input[name="time-2"]'),{
                        display: {
                                theme: 'light',
                                icons: {
                                        time: 'bi bi-clock',
                                        date: 'bi bi-calendar',
                                        up: 'bi bi-arrow-up',
                                        down: 'bi bi-arrow-down',
                                        previous: 'bi bi-chevron-left',
                                        next: 'bi bi-chevron-right',
                                        today: 'bi bi-calendar-check',
                                        clear: 'bi bi-trash',
                                        close: 'bi bi-x',
                                      },
                                      buttons: {
                                        today: true,
                                        clear: true,
                                        close: true,
                                      },
                              }
                }
            );

            const input1 = document.querySelector('input[name="time-1"]');
            const input2 = document.querySelector('input[name="time-2"]');
            const input3 = document.querySelector('input[name="distance"]');
            const showButton = document.querySelector('#showButton');

            function getTimeFromDate(dateString) {
                const date = new Date(dateString);
                const hours = date.getHours().toString().padStart(2, '0');
                const minutes = date.getMinutes().toString().padStart(2, '0');
                return `${hours}:${minutes}`;
            }

            function handleInput1Change() {
                //console.log('last selected', picker1.dates.lastPicked); 
                setTime1(getTimeFromDate(picker1.dates.lastPicked));
                //console.log('last selected', picker2.dates.lastPicked); 
                setTime2(getTimeFromDate(picker2.dates.lastPicked));
                setDistance(input3.value);  // Get the value of the distance input
                //console.log('Distance:', distance);

            }

            /*
        function handleInput3Change() {
           input3.addEventListener("change", () => {
                setDistance(input3.value);           
           });
        }
           */
           showButton.addEventListener("click", handleInput1Change);
        

        //handleInput1Change();
        //handleInput3Change();

        /*
        return () => {
                input3.removeEventListener("change", handleInput3Change);
            };
            */
        });

        useEffect(() => {
                if (time1 && time2 && distance) {
                        function getDifferenceInMinutes(time1, time2) {
                                const [hours1, minutes1] = time1.split(':').map(Number);
                                const [hours2, minutes2] = time2.split(':').map(Number);

                                const totalMinutes1 = hours1 * 60 + minutes1;
                                const totalMinutes2 = hours2 * 60 + minutes2;

                                const diff = Math.abs(totalMinutes1 - totalMinutes2);

                                // Si la différence est supérieure à 12 heures (720 minutes), 
                                // alors nous devons calculer la différence avec le jour suivant.
                                return diff > 720 ? 1440 - diff : diff;
                        }
                        //setDuree(getDifferenceInMinutes(time1, time2));
                //console.log("La différence: ", getDifferenceInMinutes(time1, time2));
                //console.log("Time1: ", time1);
                //console.log("Time2: ", time2);

                const duree = getDifferenceInMinutes(time1, time2);
                const date1 = new Date(`1970-01-01T${time1}:00`);  // Convert time1 to a Date object
                const date2 = new Date(`1970-01-01T${time2}:00`);  // Convert time2 to a Date object
                const functions = [calculateS, calculateM, calculateL, calculateXL, calculateXXL];
                const functionsleo = [calculatecitadinsetpetitutilitaire, calculateutilitaire6m3];
                //console.log(duree,false,distance,date1,date2);
                const resultsWithoutSubscription = functions.map(func => parseFloat(func(duree, false, distance, date1, date2).toFixed(2)));
                const resultsWithSubscription = functions.map(func => parseFloat(func(duree, true, distance, date1, date2).toFixed(2)));
                const leocitadinesanspreres = functionsleo.map(func => parseFloat(func(duree, distance, false).toFixed(2)));
                const leocitadineavecpreres = functionsleo.map(func => parseFloat(func(duree, distance, true).toFixed(2)));

                const results = {
                withoutSubscription: resultsWithoutSubscription,
                withSubscription: resultsWithSubscription,
                withoutSubscriptionleo: leocitadinesanspreres,
                withtSubscriptionleo: leocitadineavecpreres
                };

                props.onResultsChange(results);  // Update results in the parent component
                }
                //console.log("Time1: ", time1);
                //console.log("Time2: ", time2);
                //console.log("Distance: ", distance);
        }, [time1, time2, distance]);

        /*
        useEffect(() => {
                if (time1 && time2 && distance && duree) {
                        console.log("Look here: ", time1, time2);
                        const functions = [calculateS, calculateM, calculateL, calculateXL, calculateXXL];
                        const date1 = new Date(`1970-01-01T${time1}:00`);  // Convert time1 to a Date object
                        const date2 = new Date(`1970-01-01T${time2}:00`);  // Convert time2 to a Date object
                        console.log(duree,false,distance,date1,date2);
                        const newResults = functions.map(func => func(duree, false, distance, date1, date2));
                        props.onResultsChange(newResults);  // Update results in the parent component
                }
        }, [time1, time2, distance, duree]);
        */


    return(

        <div className='container'>
                
                <div className='d-flex flex-column bg-light gap-4 p-3 rounded-4 input-orangee'>

                        <div className='d-flex flex-row gap-3'>
                                <div className='bg-light'>
                                        <button className="btn btn-outline-dark rounded-5 bi bi-car-front-fill btn-orange fw-bold" type="submit"> Véhicules</button>
                                </div>

                                <div className='bg-light'>
                                        <button className="btn btn-outline-dark rounded-5 bi bi-truck-front-fill fw-bold" type="submit"> Utilitaires</button>
                                </div>
                        </div>

                        <div className='d-flex flex-column'>
                                <div className='text-left text-dark fw-bold'>
                                        <p>Retrait et retour</p>
                                </div>                

                                <div className='bg-light'>
                                        <div className='d-flex flex-row gap-2'>
                                                <button className="btn btn-outline-dark rounded-3 bi bi-search btn-orange" type="submit"></button>
                                                <input className="form-control text-darks input rounded-3" type="search" placeholder="Départ" aria-label="Search" name="departure"/>
                                                <input className="form-control text-darks input rounded-3" type="search" placeholder="Arrivée" aria-label="Search" name="arrival"/>
                                        </div>
                                </div>
                        </div>

                        <div className='d-flex flex-row gap-3'>

                                <div className='d-flex flex-column'>
                                        <div className='text-left text-dark fw-bold'>
                                                <p>Date & heure de départ</p>
                                        </div>        
                                        <div className='bg-light'>
                                                <div className='d-flex flex-row gap-2'>
                                                        <button className="btn btn-outline-dark rounded-3 bi bi-calendar btn-orange" type="submit"></button>
                                                        <button className="btn btn-outline-dark rounded-3 bi bi-alarm btn-orange" type="submit"></button>
                                                        <input className="form-control me-2 bg-light text-dark input rounded-3" type="text" name="time-1" />
                                                </div>
                                        </div> 
                                </div>  

                                <div className='d-flex flex-row gap-5'>
                                        <div className='d-flex flex-column'>
                                                <div className='text-left text-dark fw-bold'>
                                                        <p>Date & heure de retour</p>
                                                </div>        
                                                <div className='bg-light'>
                                                        <div className='d-flex flex-row gap-2'>
                                                                <button className="btn btn-outline-dark rounded-3 bi bi-calendar btn-orange" type="submit"></button>
                                                                <button className="btn btn-outline-dark rounded-3 bi bi-alarm btn-orange" type="submit"></button>
                                                                <input className="form-control me-2 bg-light text-dark input rounded-3" type="text" name="time-2" />
                                                        </div>
                                                </div> 
                                        </div>  
                                </div>

                                <div className='d-flex flex-row gap-5'>
                                        <div className='d-flex flex-column'>
                                                <div className='text-left text-dark fw-bold'>
                                                        <p>Distance (Km)</p>
                                                </div>        
                                                <div className='bg-light'>
                                                        <div className='d-flex flex-row gap-2'>
                                                                <button className="btn btn-outline-dark rounded-3 bi bi-ev-front btn-orange" type="submit"></button>
                                                                <input className="form-control me-2 bg-light text-dark input rounded-3" type="text" name="distance" />
                                                                <button id="showButton" className="btn btn-outline-dark rounded-3 btn-orange text-dark fw-bold" type="submit" onClick={props.onButtonClick}>Afficher</button>
                                                        </div>
                                                </div> 
                                        </div>  
                                </div>
                                
                        </div>
                </div>  
        </div>

    );
}
  
export default Main;