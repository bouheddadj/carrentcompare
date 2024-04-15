import React from 'react';
import Pastille from './Pastille';
import { useEffect } from 'react';
import pastilleBackground from './pastille-background.jpeg';
import ChartComponent from './ChartComponent'
import s from './s.png';
import m from './m.png';
import l from './l.png';
import xl from './xl.png';
import xxl from './xxl.png';

const images = [s, m, l, xl, xxl];
const pers = ["4", "4", "4", "7", "7"];
const bags = ["1", "2", "3", "4", "4"];
const types = ["Berline", "Berline", "Monospace", "Monospace", "SUV"];
const voitures = ["Voiture S", "Voiture M", "Voiture L", "Voiture XL", "Voiture XXL"];
const societes = ["Citiz", "Citiz", "Citiz", "Citiz", "Citiz"];
const abonnements = ["(Sans Abonnement)", "(Avec Abonnement)"];

const voituresleo = ["Voiture S et M", "Voiture L et XL"];
const societesleo = ["Leo&Go", "Leo&Go"];
const preres = ["(Sans pré-réservation)", "(Avec pré-réservation)"];
const imagesleo = [m, xl];
const typesleo = ["Berline", "Monospace"];
const bagsleo = ["2", "3"];



const Content = (props) => {
    // console.log(`CONTENT =`);
    // console.log(props);

    // Vérifier si props.results existe
    if (!props.results) {
        return <div><h2>Pas de résultat disponible</h2></div>;
        console.log("No content!");
    }
    const minPriceWithoutSubscription = props.results && props.results.withoutSubscription ? Math.min(...props.results.withoutSubscription) : null;
    const minPriceWithSubscription = props.results && props.results.withSubscription ? Math.min(...props.results.withSubscription) : null;
    const minPriceWithoutSubscriptionleo = props.results && props.results.withoutSubscriptionleo ? Math.min(...props.results.withoutSubscriptionleo) : null;
    const minPriceWithtSubscriptionleo = props.results && props.results.withtSubscriptionleo ? Math.min(...props.results.withtSubscriptionleo) : null;

    return (
        <div className='container'>
            <div className='d-flex flex-wrap justify-content-start gap-5'>
                {props.results.withoutSubscription && props.results.withoutSubscription.map((result, index) => (
                    <Pastille key={index} price={result} image={images[index]} per={pers[index]} bag={bags[index]} type={types[index]} voiture={voitures[index]} soc={societes[index]} abon={abonnements[0]} special={result === minPriceWithoutSubscription}/>
                ))}
                {props.results.withSubscription && props.results.withSubscription.map((result, index) => (
                    <Pastille key={index} price={result} image={images[index]} per={pers[index]} bag={bags[index]} type={types[index]} voiture={voitures[index]} soc={societes[index]} abon={abonnements[1]} special={result === minPriceWithSubscription}/>
                ))}
                {props.results.withoutSubscriptionleo && props.results.withoutSubscriptionleo.map((result, index) => (
                    <Pastille key={index} price={result} image={imagesleo[index]} per={pers[index]} bag={bagsleo[index]} type={typesleo[index]} voiture={voituresleo[index]} soc={societesleo[index]} abon={preres[0]} special={result === minPriceWithoutSubscriptionleo}/>
                ))}
                {props.results.withtSubscriptionleo && props.results.withtSubscriptionleo.map((result, index) => (
                    <Pastille key={index} price={result} image={imagesleo[index]} per={pers[index]} bag={bagsleo[index]} type={typesleo[index]} voiture={voituresleo[index]} soc={societesleo[index]} abon={preres[1]} special={result === minPriceWithtSubscriptionleo}/>
                ))}
            </div>

            <div>
                {/* <ChartComponent/> */}
            </div>
        </div>
    );
}
 
export default Content;