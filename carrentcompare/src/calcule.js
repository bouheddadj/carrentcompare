// Calcul prix trajet citiz

function calculCout (distance, temps, typeVehicule, abon) {
    let cout = 0

    if (abon){
        switch (typeVehicule) {
            case 's':
                break
            case 'm':
                cout = 0
                break
            case 'l':
                cout = 0
                break
            case 'xl':
                cout = 0
                break
            case 'xxl':
                cout = 0
                break
        }
    }else{
        switch (typeVehicule) {
            case 's':

                let jour = 0;
                let Heure = 0;
                let Minute = 0;
                let kmPar100 = 0;
                let km = 0;

                jour = Math.floor(temps / 1440);
                Heure = Math.floor((temps % 1440) / 60);

                console.log("jour: ", jour);
                console.log("Heure: ", Heure);
                console.log("Minute: ", Minute);

                cout += jour * 39 + Heure * 5.0 + Minute * 5.0;

                /*
                if (temps % 60 === 0){
                    if(temps > 24){
                        cout += ;
                    }else{
                        Heure = temps / 60;
                        cout += Heure * 5.0
                    }
                }else{
                    Heure = Math.floor(temps / 60);
                    Minute = (temps % 60) / 60;
                    cout += Heure * 5.0 + Minute * 5.0;

                    console.log("cout avant de rajouter les km: ", cout);
                }
                */

                if (distance <= 100){
                    km = distance;
                    cout += km * 0.41;
                }else{
                    //km = distance;
                    cout += 100 * 0.41;

                    kmPar100 = distance - 100;
                    cout += kmPar100 * 0.22;
                }

                 

                break
            case 'm':
                cout = 0
                break
            case 'l':
                cout = 0
                break
            case 'xl':
                cout = 0
                break
            case 'xxl':
                cout = 0
                break
        }
    }
    
    return cout;
}

console.log(calculCout(450, 450, 's', false));
console.log(calculCout(981, 3420, 's', false));