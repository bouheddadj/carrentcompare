// CDN <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
// npm install chart.js

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Chart from 'chart.js/auto'; // Importer la bibliothèque Chart.js

import * as citiz from './functions-citiz.js';
import * as leo from './function-leo.js';

const ChartComponent = () => {
    let heureDepart = new Date();
    let heureArrivee = new Date();
    heureDepart.setHours(5, 30, 0); 
    heureArrivee.setHours(8, 30, 0);

    const durations = useMemo(() => {
        const durationsArray = [];
        for (let i = 15; i <= 5000; i += 100) {
            durationsArray.push(i);
        }
        return durationsArray;
    }, []);

    const colors = ['#F80B0B', '#0B19F8', '#0D9400', '#19E1CF', '#8A2C00', '#7C0061'];

    const formatLabel = useCallback((minutes) => {
        const jours = Math.floor(minutes / 1440);
        const resteMinutes = minutes % 1440;
        const heures = Math.floor(resteMinutes / 60);
        const minutesRestantes = resteMinutes % 60;

        let format = '';
        if (jours > 0) {
            format += `${jours} jour${jours > 1 ? 's' : ''} `;
        }
        if (heures > 0) {
            format += `${heures} heure${heures > 1 ? 's' : ''} `;
        }
        if (minutesRestantes > 0) {
            format += `${minutesRestantes} minute${minutesRestantes > 1 ? 's' : ''}`;
        }

        return format.trim();
    }, []);

    const [labelsDurees, setLabelsDurees] = useState([]);
    const [distance, setDistance] = useState(10);
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current !== null) {
            chartRef.current.destroy(); // Détruire le graphique existant
        }

        const ctx = document.getElementById('myChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labelsDurees,
                datasets: [{
                    label: 'Prix (S)',
                    data: [],
                    borderColor: 'orange',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'Prix (€)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Durée de location (en minutes)'
                        }
                    }
                }
            }
        });

        chartRef.current = chart; // Enregistrer la référence du nouveau graphique

        return () => {
            if (chartRef.current !== null) {
                chartRef.current.destroy(); // Détruire le graphique lors du démontage du composant
            }
        };
    }, [labelsDurees]);

    useEffect(() => {
        const formattedLabels = durations.map(formatLabel);
        setLabelsDurees(formattedLabels);
    }, [durations, formatLabel]);

    const updateChart = (distance) => {
        setDistance(distance);
        const carSize = document.getElementById('car-size').value;
        let pricesByCarType;

        switch (carSize) {
            case 'S':
                pricesByCarType = {
                    'véhicule S': durations.map(duration => citiz.calculateS(duration, false, distance, heureDepart, heureArrivee)),
                    'véhicule citadin': durations.map(duration => leo.calculatecitadinsetpetitutilitaire(duration, distance, false)),
                };
                break;
            case 'M':
                pricesByCarType = {
                    'véhicule M': durations.map(duration => citiz.calculateM(duration, false, distance, heureDepart, heureArrivee)),
                    'véhicule citadin': durations.map(duration => leo.calculatecitadinsetpetitutilitaire(duration, distance, false)),
                };
                break;
            case 'L':
                pricesByCarType = {
                    'véhicule L': durations.map(duration => citiz.calculateL(duration, false, distance, heureDepart, heureArrivee)),
                    'véhicule citadin': durations.map(duration => leo.calculatecitadinsetpetitutilitaire(duration, distance, false)),
                };
                break;
            case 'XL':
                pricesByCarType = {
                    'véhicule XL': durations.map(duration => citiz.calculateXL(duration, false, distance, heureDepart, heureArrivee)),
                    'véhicule utilitaire': durations.map(duration => leo.calculateutilitaire6m3(duration, distance, false)),
                };
                break;
            case 'XXL':
                pricesByCarType = {
                    'véhicule XXL': durations.map(duration => citiz.calculateXXL(duration, false, distance, heureDepart, heureArrivee)),
                    'véhicule utilitaire': durations.map(duration => leo.calculateutilitaire6m3(duration, distance, false)),
                };
                break;
            case 'Tesla':
                pricesByCarType = {
                    'véhicule S': durations.map(duration => citiz.calculateS(duration, false, distance, heureDepart, heureArrivee)),
                    'véhicule M': durations.map(duration => citiz.calculateM(duration, false, distance, heureDepart, heureArrivee)),
                    'véhicule L': durations.map(duration => citiz.calculateL(duration, false, distance, heureDepart, heureArrivee)),
                    'véhicule XL': durations.map(duration => citiz.calculateXL(duration, false, distance, heureDepart, heureArrivee)),
                    'véhicule XXL': durations.map(duration => citiz.calculateXXL(duration, false, distance, heureDepart, heureArrivee)),
                    'véhicule Tesla': durations.map(duration => leo.calculateTesla(duration, distance, false)),
                };
                break;
            default: 
                break;
        }

        const datasets = Object.keys(pricesByCarType).map((carType, index) => {
            return {
                label: `Prix (${carType})`,
                data: pricesByCarType[carType],
                borderColor: colors[index % colors.length],
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                fill: false
            };
        });

        if (chartRef.current) {
            chartRef.current.data.datasets = datasets;
            chartRef.current.update();
        } else {
            console.error("chartRef.current is not defined");
        }
    };

    return (
        <div className='container'>
            <div className='d-flex flex-column bg-light gap-4 p-3 rounded-4 input-orangee'>
                <h1>Prix de location en fonction de la distance : </h1>
                <div style={{ width: '800px', height: '600px' }}>
                    <canvas id="myChart" width="800" height="600"></canvas>
                </div>
                <div className='text-left text-dark fw-bold'>
                    <p htmlFor="car-size">Choisissez une taille de voiture :</p>
                </div>
                <select id="car-size" className="btn btn-outline-dark rounded-5 bi bi-car-front-fill btn-orange fw-bold" onChange={(e) => updateChart(distance)}>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    <option value="Tesla">Tesla</option>
                </select>
                <br />
                <div className='text-left text-dark fw-bold'>
                    <p>Distance sélectionnée: <span id="distance-value">{distance}</span> km</p>
                    <input type="range" id="distance-slider" min="1" max="1000" value={distance} onChange={(e) => updateChart(parseInt(e.target.value))} />
                </div>
            </div>
        </div>
    );
};

export default ChartComponent;