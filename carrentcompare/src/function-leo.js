const leo ={"_id":{"$oid":"65f18363724330b085d40d02"},"leo":[{"name":"Véhicules citadins","prix":[{"1min":"0.32","30min":"7.5","1h":"13","2h":"22","3h":"27","6h":"42","9h":"53","1j":"65","2j":"119","3j":"169","4j":"209","5j":"249","6j":"289","7j":"329","8j":"369","9j":"409","10j":"449","11j":"489","12j":"529","13j":"569","14j":"609"}],"cars":[{"brand":"Toyota","model":"Yaris","type":"M"},{"brand":"Peugeot","model":"e-208","type":"M"},{"brand":"Toyota","model":"aygo","type":"S"}]},{"name":"Véhicules utilitaires","cars":[{"brand":"Ford","model":"Transit","type":"XL","taille":"grande","prix":[{"1min":"0.39","3h":"39","6h":"59","1j":"79","2j":"149","3j":"209","4j":"269","5j":"329","6j":"389","7j":"449","8j":"509","9j":"569","10j":"629","11j":"689","12j":"749","13j":"809","14j":"869"}]},{"brand":"Renault","model":"Kangoo e-Tech","type":"L","taille":"petite","prix":[{"1min":"0.32","30min":"7.5","1h":"13","2h":"22","3h":"27","6h":"42","9h":"53","1j":"65","2j":"119","3j":"169","4j":"209","5j":"249","6j":"289","7j":"329","8j":"369","9j":"409","10j":"449","11j":"489","12j":"529","13j":"569","14j":"609"}]}]},{"name":"Tesla","cars":[{"brand":"Tesla","model":"Model 3","type":"P","prix":[{"1min":"0.40","4h":"59","1j":"79","2j":"149","3j":"219","4j":"289","5j":"359","6j":"429","7j":"499"}]}]}]}

let distancecadeau = 0;
let distancepaye = 0;


export function calculatecitadinsetpetitutilitaire(duree,distance,preresevation){
    if(duree > 20160){
        return "you must contact us";
    }
    let jours = Math.floor(duree / 1440);
    let resteJours = duree % 1440; 
    let heures = Math.floor(resteJours / 60); 
    let minutes = resteJours % (60);
    if(duree < 60*24*2){
        distancecadeau = 100;
    }
    if(duree < 60*24*3){
        distancecadeau = 200;
    }
    if(duree < 60*24*4){
        distancecadeau = 300;
    }
    if(duree < 60*24*5){    
        distancecadeau = 400;
    }
    if(duree < 60*24*6){
        distancecadeau = 500;
    }
    if(duree < 60*24*7){
        distancecadeau = 600;
    }
    if(duree < 60*24*8){
        distancecadeau = 700;
    }
    if(duree < 60*24*9){
        distancecadeau = 800;
    }
    if(duree < 60*24*10){
        distancecadeau = 900;
    }
    if(duree < 60*24*11){
        distancecadeau = 1000;
    }
    if(duree < 60*24*12){
        distancecadeau = 1100;
    }
    if(duree < 60*24*13){
        distancecadeau = 1200;
    }
    if(duree < 60*24*14){
        distancecadeau = 1300;
    }
    if(duree < 60*24*15){
        distancecadeau = 1400;
    }
    let prixmin = Math.floor(minutes/30) * leo.leo[0].prix[0]['30min'] + Math.floor(minutes%30) * leo.leo[0].prix[0]['1min'];
    let prixheure = Math.floor(heures/9) * leo.leo[0].prix[0]['9h'] + Math.floor((heures%9)/6) * leo.leo[0].prix[0]['6h'] + Math.floor(((heures%9)%6)/3) * leo.leo[0].prix[0]['3h'] + Math.floor((((heures%9)%6)%3)/2) * leo.leo[0].prix[0]['2h'] + Math.floor((((heures%9)%6)%3)%2) * leo.leo[0].prix[0]['1h'];
    let prixjour = Math.floor(jours/14) * leo.leo[0].prix[0]['14j'] + Math.floor((jours%14)/13) * leo.leo[0].prix[0]['13j'] + Math.floor(((jours%14)%13)/12) * leo.leo[0].prix[0]['12j'] + Math.floor((((jours%14)%13)%12)/11) * leo.leo[0].prix[0]['11j'] + Math.floor(((((jours%14)%13)%12)%11)/10) * leo.leo[0].prix[0]['10j'] + Math.floor((((((jours%14)%13)%12)%11)%10)/9) * leo.leo[0].prix[0]['9j'] + Math.floor(((((((jours%14)%13)%12)%11)%10)%9)/8) * leo.leo[0].prix[0]['8j'] + Math.floor((((((((jours%14)%13)%12)%11)%10)%9)%8)/7) * leo.leo[0].prix[0]['7j'] + Math.floor(((((((((jours%14)%13)%12)%11)%10)%9)%8)%7)/6) * leo.leo[0].prix[0]['6j'] + Math.floor((((((((((jours%14)%13)%12)%11)%10)%9)%8)%7)%6)/5) * leo.leo[0].prix[0]['5j'] + Math.floor(((((((((((jours%14)%13)%12)%11)%10)%9)%8)%7)%6)%5)/4) * leo.leo[0].prix[0]['4j'] + Math.floor((((((((((((jours%14)%13)%12)%11)%10)%9)%8)%7)%6)%5)%4)/3) * leo.leo[0].prix[0]['3j'] + Math.floor(((((((((((((jours%14)%13)%12)%11)%10)%9)%8)%7)%6)%5)%4)%3)/2) * leo.leo[0].prix[0]['2j'] + Math.floor((((((((((((((jours%14)%13)%12)%11)%10)%9)%8)%7)%6)%5)%4)%3)%2) * leo.leo[0].prix[0]['1j']);
    console.log(prixmin , prixheure , prixjour);
    

    distancepaye=distance-distancecadeau;
    if(distancepaye < 0){
        distancepaye=0;
    }
    if(!preresevation){
        return 1+prixmin + prixheure + prixjour + distancepaye*0.30;
    }
    return 11+prixmin + prixheure + prixjour + distancepaye*0.30;
}




//
export function calculateutilitaire6m3(duree,distance,preresevation){
    if(duree > 20160){
        return "you must contact us"
    }
    if(duree < 60*24*2){
        distancecadeau = 100;
    }
    if(duree < 60*24*3){
        distancecadeau = 200;
    }
    if(duree < 60*24*4){
        distancecadeau = 300;
    }
    if(duree < 60*24*5){    
        distancecadeau = 400;
    }
    if(duree < 60*24*6){
        distancecadeau = 500;
    }
    if(duree < 60*24*7){
        distancecadeau = 600;
    }
    if(duree < 60*24*8){
        distancecadeau = 700;
    }
    if(duree < 60*24*9){
        distancecadeau = 800;
    }
    if(duree < 60*24*10){
        distancecadeau = 900;
    }
    if(duree < 60*24*11){
        distancecadeau = 1000;
    }
    if(duree < 60*24*12){
        distancecadeau = 1100;
    }
    if(duree < 60*24*13){
        distancecadeau = 1200;
    }
    if(duree < 60*24*14){
        distancecadeau = 1300;
    }
    if(duree < 60*24*15){
        distancecadeau = 1400;
    }
    let jours = Math.floor(duree / 1440);
    let resteJours = duree % 1440; 
    let heures = Math.floor(resteJours / 60); 
    let minutes = resteJours % 60;
    console.log(jours,heures,minutes);
    let prixmin = (Math.floor((heures%6)%3)*60 + minutes) * leo.leo[1].cars[0].prix[0]['1min'];
    let prixheure = Math.floor(heures/6) * leo.leo[1].cars[0].prix[0]['6h'] + Math.floor((heures%6)/3) * leo.leo[1].cars[0].prix[0]['3h'] 
    let prixjour = Math.floor(jours/14) * leo.leo[1].cars[0].prix[0]['14j'] +  Math.floor((jours%14)/13) * leo.leo[1].cars[0].prix[0]['13j'] +  Math.floor(((jours%14)%13)/12) * leo.leo[1].cars[0].prix[0]['12j'] +  Math.floor((((jours%14)%13)%12)/11) * leo.leo[1].cars[0].prix[0]['11j'] + Math.floor(((((jours%14)%13)%12)%11)/10) * leo.leo[1].cars[0].prix[0]['10j'] + Math.floor((((((jours%14)%13)%12)%11)%10)/9) * leo.leo[1].cars[0].prix[0]['9j'] + Math.floor(((((((jours%14)%13)%12)%11)%10)%9)/8) * leo.leo[1].cars[0].prix[0]['8j'] + Math.floor((((((((jours%14)%13)%12)%11)%10)%9)%8)/7) * leo.leo[1].cars[0].prix[0]['7j'] + Math.floor(((((((((jours%14)%13)%12)%11)%10)%9)%8)%7)/6) * leo.leo[1].cars[0].prix[0]['6j'] + Math.floor((((((((((jours%14)%13)%12)%11)%10)%9)%8)%7)%6)/5) * leo.leo[1].cars[0].prix[0]['5j'] + Math.floor(((((((((((jours%14)%13)%12)%11)%10)%9)%8)%7)%6)%5)/4) * leo.leo[1].cars[0].prix[0]['4j'] + Math.floor((((((((((((jours%14)%13)%12)%11)%10)%9)%8)%7)%6)%5)%4)/3) * leo.leo[1].cars[0].prix[0]['3j'] + Math.floor(((((((((((((jours%14)%13)%12)%11)%10)%9)%8)%7)%6)%5)%4)%3)/2) * leo.leo[1].cars[0].prix[0]['2j'] + (((((((((((((jours%14)%13)%12)%11)%10)%9)%8)%7)%6)%5)%4)%3)%2 * leo.leo[1].cars[0].prix[0]['1j']);
    console.log(prixmin , prixheure , prixjour);
    if(prixmin > leo.leo[1].cars[0].prix[0]['3h']){
        prixmin=0;
        prixheure=+leo.leo[1].cars[0].prix[0]['3h'];
    }
    if(prixheure > leo.leo[1].cars[0].prix[0]['1j']){
        prixheure=0;
        prixjour=+leo.leo[1].cars[0].prix[0]['1j'];
    }
    distancepaye=distance-distancecadeau;
    if(distancepaye < 0){
        distancepaye=0;
    }
    console.log(prixmin , prixheure , prixjour);
    if(!preresevation){
        return 1+prixmin + prixheure + prixjour + distancepaye*0.30;
    }
    return 11+prixmin + prixheure + prixjour + distancepaye*0.30;
}
    


//

function calculateTesla(duree,distance,preresevation ){
    if(duree > 20160){
        return "you must contact us";
    }
    if(duree < 60*24*2){
        distancecadeau = 100;
    }
    if(duree < 60*24*3){
        distancecadeau = 200;
    }
    if(duree < 60*24*4){
        distancecadeau = 300;
    }
    if(duree < 60*24*5){    
        distancecadeau = 400;
    }
    if(duree < 60*24*6){
        distancecadeau = 500;
    }
    if(duree < 60*24*7){
        distancecadeau = 600;
    }
    if(duree < 60*24*8){
        distancecadeau = 700;
    }
    let jours = Math.floor(duree / 1440);
    let resteJours = duree % 1440; 
    let heures = Math.floor(resteJours / 60 / 4); 
    let minutes = resteJours % (60 * 4); 
    console.log(jours,heures,minutes);
    let prixmin = minutes * leo.leo[2].cars[0].prix[0]['1min'];
    let prixheure = heures * leo.leo[2].cars[0].prix[0]['4h'];
    let prixjour = Math.floor(jours/7) * leo.leo[2].cars[0].prix[0]['7j'] + Math.floor(jours%7)/6 * leo.leo[2].cars[0].prix[0]['6j'] + Math.floor((jours%7)%6)/5 * leo.leo[2].cars[0].prix[0]['5j'] + Math.floor(((jours%7)%6)%5)/4 * leo.leo[2].cars[0].prix[0]['4j'] + Math.floor((((jours%7)%6)%5)%4)/3 * leo.leo[2].cars[0].prix[0]['3j'] + Math.floor(((((jours%7)%6)%5)%4)%3)/2 * leo.leo[2].cars[0].prix[0]['2j'] + Math.floor((((((jours%7)%6)%5)%4)%3)%2) * leo.leo[2].cars[0].prix[0]['1j'];
    if(prixmin > leo.leo[2].cars[0].prix[0]['4h']){
        prixmin=0;
        prixheure=(heures+1)*leo.leo[2].cars[0].prix[0]['4h'];
    }
    
    if(prixheure > leo.leo[2].cars[0].prix[0]['1j']){
        prixheure=0;
        prixjour=(jours+1)*leo.leo[2].cars[0].prix[0]['1j'];
    }
    distancepaye=distance-distancecadeau;
    if(distancepaye < 0){
        distancepaye=0;
    }
    console.log(prixmin , prixheure , prixjour);
    if(!preresevation){
        return 1+prixmin + prixheure + prixjour + distancepaye*0.40;
    }
    return 11+prixmin + prixheure + prixjour + distancepaye*0.40;
} 
console.log(calculateTesla(9*60+15,20,false));
