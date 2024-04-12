const citi = {"_id":{"$oid":"65f9a486136c489442860a3c"},"citiz":[{"avec abo":[{"type":"S","hourly":{"$numberDouble":"2.5"},"daily":{"$numberInt":"22"},"weekly":{"$numberInt":"120"},"subscription":"per hour: $2.5, per day: $22, per week: $120"},{"type":"M","hourly":{"$numberDouble":"3.0"},"daily":{"$numberInt":"27"},"weekly":{"$numberInt":"150"},"subscription":"per hour: $2.5, per day: $27, per week: $150"},{"type":"L","hourly":{"$numberDouble":"3.5"},"daily":{"$numberInt":"33"},"weekly":{"$numberInt":"180"},"subscription":"per hour: $3.5, per day: $33, per week: $180"},{"type":"XL","hourly":{"$numberInt":"4"},"daily":{"$numberInt":"38"},"weekly":{"$numberInt":"210"},"subscription":"per hour: $4, per day: $38, per week: $210"},{"type":"XXL","hourly":{"$numberDouble":"4.5"},"daily":{"$numberInt":"44"},"weekly":{"$numberInt":"240"},"subscription":"per hour: $4.5, per day: $44, per week: $240"},{"type":"bike","hourly":{"$numberInt":"4"},"daily":{"$numberInt":"20"},"subscription":"per hour: $4, per day: $20"}]},{"sans abo":[{"type":"S","hourly":{"$numberInt":"5"},"daily":{"$numberInt":"39"},"weekly":{"$numberInt":"180"},"noSubscription":"per hour: $5, per day: $39, per week: $180"},{"type":"M","hourly":{"$numberDouble":"5.5"},"daily":{"$numberInt":"45"},"weekly":{"$numberInt":"210"},"noSubscription":"per hour: $5.5, per day: $45, per week: $210"},{"type":"L","hourly":{"$numberInt":"6"},"daily":{"$numberInt":"50"},"weekly":{"$numberInt":"240"},"noSubscription":"per hour: $6, per day: $50, per week: $240"},{"type":"XL","hourly":{"$numberDouble":"6.5"},"daily":{"$numberInt":"56"},"weekly":{"$numberInt":"270"},"noSubscription":"per hour: $6.5, per day: $56, per week: $270"},{"type":"XXL","hourly":{"$numberInt":"7"},"daily":{"$numberInt":"60"},"weekly":{"$numberInt":"300"},"noSubscription":"per hour: $7, per day: $60, per week: $300"},{"type":"bike","hourly":{"$numberInt":"7"},"daily":{"$numberInt":"34"},"noSubscription":"per hour: $7, per day: $34"}]}]}
// Créer deux objets Date pour les deux heures


let heureDepart = new Date();
let heureArrivee = new Date();

// Définir les heures et les minutes pour chaque objet Date
heureDepart.setHours(5, 30, 0); 
heureArrivee.setHours(8, 30, 0); 


function calculateHoursInInterval(depart, arrive) {
    let hoursInInterval = 0;
  
    // Convertit les heures en format 24 heures
    depart = depart % 24;
    arrive = arrive % 24;
  
    // Si l'heure de départ est après l'heure d'arrivée, cela signifie que l'intervalle traverse minuit
    if (depart > arrive) {
      arrive += 24;
    }
  
    // Parcourt chaque heure de l'intervalle
    for (let i = depart; i < arrive; i++) {
      let hour = i % 24;
  
      // Si l'heure est entre 23h et 7h, l'ajoute au total
      if (hour >= 23 || hour < 7) {
        hoursInInterval++;
      }
    }
  
    return hoursInInterval;
}



export function calculateS(duree,abonnement,distance,heuredepart,heurearrivee){
    function calculateHoursInInterval(depart, arrive) {
        let hoursInInterval = 0;
      
        // Convertit les heures en format 24 heures
        depart = depart % 24;
        arrive = arrive % 24;
      
        // Si l'heure de départ est après l'heure d'arrivée, cela signifie que l'intervalle traverse minuit
        if (depart > arrive) {
          arrive += 24;
        }
      
        // Parcourt chaque heure de l'intervalle
        for (let i = depart; i < arrive; i++) {
          let hour = i % 24;
      
          // Si l'heure est entre 23h et 7h, l'ajoute au total
          if (hour >= 23 || hour < 7) {
            hoursInInterval++;
          }
        }
      
        return hoursInInterval;
    }


    
    const prixkmunder100 =0.41;
    const prixkmover100 =0.22;
    let week = Math.floor(duree / 10080);
    let  day = Math.floor((duree % 10080) / 1440);
    let  hour = Math.floor(((duree % 10080) % 1440)/60);
    console.log(calculateHoursInInterval(heuredepart.getHours(),heurearrivee.getHours()));
    hour = hour - calculateHoursInInterval(heuredepart.getHours(),heurearrivee.getHours());
    console.log(hour);
    let  min = Math.floor(((duree % 10080) % 1440)%60);
    let prixdureesansab;
    let prixdureeab;
    if(duree < 60){
        return (citi.citiz[0]['avec abo'][0].hourly['$numberDouble']);
    }
    if(abonnement){
        let prixweekabonne=citi.citiz[0]['avec abo'][0].weekly['$numberInt']*week;
        let prixdailyabonne=citi.citiz[0]['avec abo'][0].daily['$numberInt']*day;
        let prixhourlyabonne=citi.citiz[0]['avec abo'][0].hourly['$numberDouble']*hour;
        console.log(prixdailyabonne);
        let prixminabonne=citi.citiz[0]['avec abo'][0].hourly['$numberDouble']/60*min;
        if(prixhourlyabonne > citi.citiz[0]['avec abo'][0].daily['$numberInt']){
            prixhourlyabonne=0;
            prixdailyabonne=(day+1)*citi.citiz[0]['avec abo'][0].daily['$numberInt'];
        }
        if(prixdailyabonne > citi.citiz[0]['avec abo'][0].weekly['$numberInt']){
            prixdailyabonne=0;
            prixweekabonne=(week+1)*citi.citiz[0]['avec abo'][0].weekly['$numberInt'];
        }
        prixdureeab =prixweekabonne + prixdailyabonne + prixhourlyabonne + prixminabonne;         
    }
    if(!abonnement){
        let prixweeknonabonne=citi.citiz[1]['sans abo'][0].weekly['$numberInt']*week;
        let prixdailynonabonne=citi.citiz[1]['sans abo'][0].daily['$numberInt']*day;
        let prixhourlynonabonne=citi.citiz[1]['sans abo'][0].hourly['$numberInt']*hour;
        let prixminnonabonne=citi.citiz[1]['sans abo'][0].hourly['$numberInt']/60*min;
        if(prixhourlynonabonne > citi.citiz[1]['sans abo'][0].daily['$numberInt']){
            prixhourlynonabonne=0;
            prixdailynonabonne=(day+1)*citi.citiz[1]['sans abo'][0].daily['$numberInt'];
            
        }
        if(prixdailynonabonne > citi.citiz[1]['sans abo'][0].weekly['$numberInt']){
            prixdailynonabonne=0;
            prixweeknonabonne=(week+1)*citi.citiz[1]['sans abo'][0].weekly['$numberInt'];
        }
        prixdureesansab =(prixweeknonabonne + prixdailynonabonne + prixhourlynonabonne + prixminnonabonne);
        
        
    
    }
    if(abonnement && distance <= 100){
        return (prixdureeab + distance*prixkmunder100);
    }
    else if(abonnement && distance > 100){
        distance = distance - 100;
        console.log(prixdureesansab);
        return (prixdureeab + distance * prixkmover100 + 100 * prixkmunder100);
    }
    else if(!abonnement && distance <= 100){
        return (prixdureesansab + distance*prixkmunder100);
    }
    else{
        distance = distance - 100;
        console.log(distance * prixkmover100 );
        return (prixdureesansab + distance*prixkmover100 + 100 * prixkmunder100);
    }
    
} 

  
//
export function calculateM(duree,abonnement,distance,heuredepart,heurearrivee){
    function calculateHoursInInterval(depart, arrive) {
        let hoursInInterval = 0;
      
        // Convertit les heures en format 24 heures
        depart = depart % 24;
        arrive = arrive % 24;
      
        // Si l'heure de départ est après l'heure d'arrivée, cela signifie que l'intervalle traverse minuit
        if (depart > arrive) {
          arrive += 24;
        }
      
        // Parcourt chaque heure de l'intervalle
        for (let i = depart; i < arrive; i++) {
          let hour = i % 24;
      
          // Si l'heure est entre 23h et 7h, l'ajoute au total
          if (hour >= 23 || hour < 7) {
            hoursInInterval++;
          }
        }
      
        return hoursInInterval;
    }


    
    const prixkmunder100 =0.41;
    const prixkmover100 =0.22;
    let week = Math.floor(duree / 10080);
    let  day = Math.floor((duree % 10080) / 1440);
    let  hour = Math.floor(((duree % 10080) % 1440)/60);
    console.log(calculateHoursInInterval(heuredepart.getHours(),heurearrivee.getHours()));
    hour = hour - calculateHoursInInterval(heuredepart.getHours(),heurearrivee.getHours());
    console.log(hour);
    let  min = Math.floor(((duree % 10080) % 1440)%60);
    console.log(week,day,hour,min);
    let prixdureesansab;
    let prixdureeab;
    if(duree < 60){
        return (citi.citiz[0]['avec abo'][1].hourly['$numberDouble']);
    }
    if(abonnement){
        let prixweekabonne=citi.citiz[0]['avec abo'][1].weekly['$numberInt']*week;
        let prixdailyabonne=citi.citiz[0]['avec abo'][1].daily['$numberInt']*day;
        let prixhourlyabonne=citi.citiz[0]['avec abo'][1].hourly['$numberDouble']*hour;
        let prixminabonne=citi.citiz[0]['avec abo'][1].hourly['$numberDouble']/60*min;
        console.log(prixhourlyabonne,prixdailyabonne,prixweekabonne,prixminabonne);
        if(prixhourlyabonne > citi.citiz[0]['avec abo'][1].daily['$numberInt']){
            prixhourlyabonne=0;
            prixdailyabonne=(day+1)*citi.citiz[0]['avec abo'][1].daily['$numberInt'];
        }
        if(prixdailyabonne > citi.citiz[0]['avec abo'][1].weekly['$numberInt']){
            prixdailyabonne=0;
            prixweekabonne=(week+1)*citi.citiz[0]['avec abo'][1].weekly['$numberInt'];
        }
        
        prixdureeab = (prixweekabonne + prixdailyabonne + prixhourlyabonne + prixminabonne);         
    }
    else{
        let prixweeknonabonne=citi.citiz[1]['sans abo'][1].weekly['$numberInt']*week;
        let prixdailynonabonne=citi.citiz[1]['sans abo'][1].daily['$numberInt']*day;
        let prixhourlynonabonne=citi.citiz[1]['sans abo'][1].hourly['$numberDouble']*hour;
        let prixminnonabonne=citi.citiz[1]['sans abo'][1].hourly['$numberDouble']/60*min;
        
        if(prixhourlynonabonne > citi.citiz[1]['sans abo'][1].daily['$numberInt']){
            prixhourlynonabonne=0;
            prixdailynonabonne=(day+1)*citi.citiz[1]['sans abo'][1].daily['$numberInt'];
            
        }
        if(prixdailynonabonne > citi.citiz[1]['sans abo'][1].weekly['$numberInt']){
            prixdailynonabonne=0;
            prixweeknonabonne=(week+1)*citi.citiz[1]['sans abo'][1].weekly['$numberInt'];
        }
        prixdureesansab = (prixweeknonabonne + prixdailynonabonne + prixhourlynonabonne + prixminnonabonne);
        console.log(prixdailynonabonne,prixhourlynonabonne);
    }
    if(abonnement && distance <= 100){
        return (prixdureeab + distance*prixkmunder100);
    }
    else if(abonnement && distance > 100){
        distance = distance - 100;
        console.log(prixdureesansab);
        return (prixdureeab + distance * prixkmover100 + 100 * prixkmunder100);
    }
    else if(!abonnement && distance <= 100){
        return (prixdureesansab + distance*prixkmunder100);
    }
    else{
        distance = distance - 100;
        console.log(distance * prixkmover100 );
        return (prixdureesansab + distance*prixkmover100 + 100 * prixkmunder100);
    }
}  

//
export function calculateL(duree,abonnement,distance,heuredepart,heurearrivee){
    function calculateHoursInInterval(depart, arrive) {
        let hoursInInterval = 0;
      
        // Convertit les heures en format 24 heures
        depart = depart % 24;
        arrive = arrive % 24;
      
        // Si l'heure de départ est après l'heure d'arrivée, cela signifie que l'intervalle traverse minuit
        if (depart > arrive) {
          arrive += 24;
        }
      
        // Parcourt chaque heure de l'intervalle
        for (let i = depart; i < arrive; i++) {
          let hour = i % 24;
      
          // Si l'heure est entre 23h et 7h, l'ajoute au total
          if (hour >= 23 || hour < 7) {
            hoursInInterval++;
          }
        }
      
        return hoursInInterval;
    }

    const prixkmunder100 =0.41;
    const prixkmover100 =0.22;
    let week = Math.floor(duree / 10080);
    let  day = Math.floor((duree % 10080) / 1440);
    let  hour = Math.floor(((duree % 10080) % 1440)/60);
    console.log(calculateHoursInInterval(heuredepart.getHours(),heurearrivee.getHours()));
    hour = hour - calculateHoursInInterval(heuredepart.getHours(),heurearrivee.getHours());
    console.log(hour);
    let  min = Math.floor(((duree % 10080) % 1440)%60);
    console.log(week,day,hour,min);
    let prixdureesansab;
    let prixdureeab;
    if(duree < 60){
        return (citi.citiz[0]['avec abo'][2].hourly['$numberDouble']);
    }
    if(abonnement){
        let prixweekabonne=citi.citiz[0]['avec abo'][2].weekly['$numberInt']*week;
        let prixdailyabonne=citi.citiz[0]['avec abo'][2].daily['$numberInt']*day;
        let prixhourlyabonne=citi.citiz[0]['avec abo'][2].hourly['$numberDouble']*hour;
        let prixminabonne=citi.citiz[0]['avec abo'][2].hourly['$numberDouble']/60*min;
        console.log(prixhourlyabonne,prixdailyabonne,prixweekabonne,prixminabonne);
        if(prixhourlyabonne > citi.citiz[0]['avec abo'][2].daily['$numberInt']){
            prixhourlyabonne=0;
            prixdailyabonne=(day+1)*citi.citiz[0]['avec abo'][2].daily['$numberInt'];
        }
        if(prixdailyabonne > citi.citiz[0]['avec abo'][2].weekly['$numberInt']){
            prixdailyabonne=0;
            prixweekabonne=(week+1)*citi.citiz[0]['avec abo'][2].weekly['$numberInt'];
        }
        
        prixdureeab = (prixweekabonne + prixdailyabonne + prixhourlyabonne + prixminabonne);         
    }
    else{
        let prixweeknonabonne=citi.citiz[1]['sans abo'][2].weekly['$numberInt']*week;
        let prixdailynonabonne=citi.citiz[1]['sans abo'][2].daily['$numberInt']*day;
        let prixhourlynonabonne=citi.citiz[1]['sans abo'][2].hourly['$numberInt']*hour;
        let prixminnonabonne=citi.citiz[1]['sans abo'][2].hourly['$numberInt']/60*min;
        
        if(prixhourlynonabonne > citi.citiz[1]['sans abo'][2].daily['$numberInt']){
            prixhourlynonabonne=0;
            prixdailynonabonne=(day+1)*citi.citiz[1]['sans abo'][2].daily['$numberInt'];
            
        }
        if(prixdailynonabonne > citi.citiz[1]['sans abo'][2].weekly['$numberInt']){
            prixdailynonabonne=0;
            prixweeknonabonne=(week+1)*citi.citiz[1]['sans abo'][2].weekly['$numberInt'];
        }
        prixdureesansab = (prixweeknonabonne + prixdailynonabonne + prixhourlynonabonne + prixminnonabonne);
        console.log(prixdailynonabonne,prixhourlynonabonne);
    }
    if(abonnement && distance <= 100){
        return (prixdureeab + distance*prixkmunder100);
    }
    else if(abonnement && distance > 100){
        distance = distance - 100;
        console.log(prixdureesansab);
        return (prixdureeab + distance * prixkmover100 + 100 * prixkmunder100);
    }
    else if(!abonnement && distance <= 100){
        return (prixdureesansab + distance*prixkmunder100);
    }
    else{
        distance = distance - 100;
        console.log(distance * prixkmover100 );
        return (prixdureesansab + distance*prixkmover100 + 100 * prixkmunder100);
    }

        
}   

///
export function calculateXL(duree,abonnement,distance,heuredepart,heurearrivee){
    function calculateHoursInInterval(depart, arrive) {
        let hoursInInterval = 0;
      
        // Convertit les heures en format 24 heures
        depart = depart % 24;
        arrive = arrive % 24;
      
        // Si l'heure de départ est après l'heure d'arrivée, cela signifie que l'intervalle traverse minuit
        if (depart > arrive) {
          arrive += 24;
        }
      
        // Parcourt chaque heure de l'intervalle
        for (let i = depart; i < arrive; i++) {
          let hour = i % 24;
      
          // Si l'heure est entre 23h et 7h, l'ajoute au total
          if (hour >= 23 || hour < 7) {
            hoursInInterval++;
          }
        }
      
        return hoursInInterval;
    }
 
    const prixkmunder100 =0.51;
    const prixkmover100 =0.27;
    let week = Math.floor(duree / 10080);
    let  day = Math.floor((duree % 10080) / 1440);
    let  hour = Math.floor(((duree % 10080) % 1440)/60);
    console.log(calculateHoursInInterval(heuredepart.getHours(),heurearrivee.getHours()));
    hour = hour - calculateHoursInInterval(heuredepart.getHours(),heurearrivee.getHours());
    console.log(hour);   
    let  min = Math.floor(((duree % 10080) % 1440)%60);
    console.log(week,day,hour,min);
    let prixdureesansab;
    let prixdureeab;

    if(duree < 60){
        return (citi.citiz[0]['avec abo'][3].hourly['$numberInt']);
    }
    if(abonnement){
        let prixweekabonne=citi.citiz[0]['avec abo'][3].weekly['$numberInt']*week;
        let prixdailyabonne=citi.citiz[0]['avec abo'][3].daily['$numberInt']*day;
        let prixhourlyabonne=citi.citiz[0]['avec abo'][3].hourly['$numberInt']*hour;
        let prixminabonne=citi.citiz[0]['avec abo'][3].hourly['$numberInt']/60*min;
        console.log(prixhourlyabonne,prixdailyabonne,prixweekabonne,prixminabonne);
        if(prixhourlyabonne > citi.citiz[0]['avec abo'][3].daily['$numberInt']){
            prixhourlyabonne=0;
            prixdailyabonne=(day+1)*citi.citiz[0]['avec abo'][3].daily['$numberInt'];
        }
        if(prixdailyabonne > citi.citiz[0]['avec abo'][3].weekly['$numberInt']){
            prixdailyabonne=0;
            prixweekabonne=(week+1)*citi.citiz[0]['avec abo'][3].weekly['$numberInt'];
        }
        
        prixdureeab = (prixweekabonne + prixdailyabonne + prixhourlyabonne + prixminabonne);         
    }
    else{
        let prixweeknonabonne=citi.citiz[1]['sans abo'][3].weekly['$numberInt']*week;
        let prixdailynonabonne=citi.citiz[1]['sans abo'][3].daily['$numberInt']*day;
        let prixhourlynonabonne=citi.citiz[1]['sans abo'][3].hourly['$numberDouble']*hour;
        let prixminnonabonne=citi.citiz[1]['sans abo'][3].hourly['$numberDouble']/60*min;
        
        if(prixhourlynonabonne > citi.citiz[1]['sans abo'][3].daily['$numberInt']){
            prixhourlynonabonne=0;
            prixdailynonabonne=(day+1)*citi.citiz[1]['sans abo'][3].daily['$numberInt'];
            
        }
        if(prixdailynonabonne > citi.citiz[1]['sans abo'][3].weekly['$numberInt']){
            prixdailynonabonne=0;
            prixweeknonabonne=(week+1)*citi.citiz[1]['sans abo'][3].weekly['$numberInt'];
        }
        prixdureesansab = (prixweeknonabonne + prixdailynonabonne + prixhourlynonabonne + prixminnonabonne);
        console.log(prixdailynonabonne,prixhourlynonabonne);
    }
    if(abonnement && distance <= 100){
        return (prixdureeab + distance*prixkmunder100);
    }
    else if(abonnement && distance > 100){
        distance = distance - 100;
        console.log(prixdureesansab);
        return (prixdureeab + distance * prixkmover100 + 100 * prixkmunder100);
    }
    else if(!abonnement && distance <= 100){
        return (prixdureesansab + distance*prixkmunder100);
    }
    else{
        distance = distance - 100;
        console.log(distance * prixkmover100 );
        return (prixdureesansab + distance*prixkmover100 + 100 * prixkmunder100);
    }

       
}  
///
export function calculateXXL(duree,abonnement,distance,heuredepart,heurearrivee){
    function calculateHoursInInterval(depart, arrive) {
        let hoursInInterval = 0;
      
        // Convertit les heures en format 24 heures
        depart = depart % 24;
        arrive = arrive % 24;
      
        // Si l'heure de départ est après l'heure d'arrivée, cela signifie que l'intervalle traverse minuit
        if (depart > arrive) {
          arrive += 24;
        }
      
        // Parcourt chaque heure de l'intervalle
        for (let i = depart; i < arrive; i++) {
          let hour = i % 24;
      
          // Si l'heure est entre 23h et 7h, l'ajoute au total
          if (hour >= 23 || hour < 7) {
            hoursInInterval++;
          }
        }
      
        return hoursInInterval;
    }

    const prixkmunder100 =0.51;
    const prixkmover100 =0.27;
    let week = Math.floor(duree / 10080);
    let  day = Math.floor((duree % 10080) / 1440);
    let  hour = Math.floor(((duree % 10080) % 1440)/60);
    console.log(calculateHoursInInterval(heuredepart.getHours(),heurearrivee.getHours()));
    hour = hour - calculateHoursInInterval(heuredepart.getHours(),heurearrivee.getHours());
    console.log(hour);
    let  min = Math.floor(((duree % 10080) % 1440)%60);
    console.log(week,day,hour,min);
    let prixdureesansab;
    let prixdureeab;

    if(duree < 60){
        return (citi.citiz[0]['avec abo'][3].hourly['$numberInt']);
    }
    if(abonnement){
        let prixweekabonne=citi.citiz[0]['avec abo'][4].weekly['$numberInt']*week;
        let prixdailyabonne=citi.citiz[0]['avec abo'][4].daily['$numberInt']*day;
        let prixhourlyabonne=citi.citiz[0]['avec abo'][4].hourly['$numberDouble']*hour;
        let prixminabonne=citi.citiz[0]['avec abo'][4].hourly['$numberDouble']/60*min;
        console.log(prixhourlyabonne,prixdailyabonne,prixweekabonne,prixminabonne);
        if(prixhourlyabonne > citi.citiz[0]['avec abo'][4].daily['$numberInt']){
            prixhourlyabonne=0;
            prixdailyabonne=(day+1)*citi.citiz[0]['avec abo'][4].daily['$numberInt'];
        }
        if(prixdailyabonne > citi.citiz[0]['avec abo'][4].weekly['$numberInt']){
            prixdailyabonne=0;
            prixweekabonne=(week+1)*citi.citiz[0]['avec abo'][4].weekly['$numberInt'];
        }
        
        prixdureeab = (prixweekabonne + prixdailyabonne + prixhourlyabonne + prixminabonne);         
    }
    else{
        let prixweeknonabonne=citi.citiz[1]['sans abo'][4].weekly['$numberInt']*week;
        let prixdailynonabonne=citi.citiz[1]['sans abo'][4].daily['$numberInt']*day;
        let prixhourlynonabonne=citi.citiz[1]['sans abo'][4].hourly['$numberInt']*hour;
        let prixminnonabonne=citi.citiz[1]['sans abo'][4].hourly['$numberInt']/60*min;
        
        if(prixhourlynonabonne > citi.citiz[1]['sans abo'][4].daily['$numberInt']){
            prixhourlynonabonne=0;
            prixdailynonabonne=(day+1)*citi.citiz[1]['sans abo'][4].daily['$numberInt'];
            
        }
        if(prixdailynonabonne > citi.citiz[1]['sans abo'][4].weekly['$numberInt']){
            prixdailynonabonne=0;
            prixweeknonabonne=(week+1)*citi.citiz[1]['sans abo'][4].weekly['$numberInt'];
        }
        prixdureesansab = (prixweeknonabonne + prixdailynonabonne + prixhourlynonabonne + prixminnonabonne);
        console.log(prixdailynonabonne,prixhourlynonabonne);
    }
    if(abonnement && distance <= 100){
        return (prixdureeab + distance*prixkmunder100);
    }
    else if(abonnement && distance > 100){
        distance = distance - 100;
        console.log(prixdureesansab);
        return (prixdureeab + distance * prixkmover100 + 100 * prixkmunder100);
    }
    else if(!abonnement && distance <= 100){
        return (prixdureesansab + distance*prixkmunder100);
    }
    else{
        distance = distance - 100;
        console.log(distance * prixkmover100 );
        return (prixdureesansab + distance*prixkmover100 + 100 * prixkmunder100);
    }

       
}