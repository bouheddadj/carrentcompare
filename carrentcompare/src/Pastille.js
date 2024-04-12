import React from 'react'
import pastilleBackground from './pastille-background.jpeg';
import s from './s.png';
import m from './m.png';
import l from './l.png';
import xl from './xl.png';
import xxl from './xxl.png';

const Pastille = (props) => {
    const specialClass = props.special ? 'pulse' : '';
    const specialStyle = props.special ? {border: '3px solid gold'} : {};

    return (

            <div className={`rounded-3 input-orangee mt-4 ${specialClass}`} style={{...specialStyle, position: 'relative', backgroundColor: 'white', height: '400px', width: '400px'}}>

                <img className='rounded-2' src={pastilleBackground} alt="background" style={{width: '100%', height: '100%'}}/>
                <img src={props.image} alt="background" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%'}}/>
                
                <p className='text-light fs-5 fw-bold' style={{position: 'absolute', top: '5px', left: '15px'}}>{props.voiture} | {props.soc}</p>
                <p className='text-secondary fs-6' style={{position: 'absolute', top: '35px', left: '15px'}}>ou similaire | {props.type}</p>

                <div className='d-flex flex-row gap-2' style={{position: 'absolute', top: '80px', left: '15px'}}>
                    <div className="d-flex align-items-center justify-content-center text-white rounded-4 gap-2" style={{backgroundColor: 'rgba(255, 255, 255, 0.10)', height: '24px', width: '47px'}}>
                        <i className="bi bi-person-fill"></i>
                        <span>{props.per}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-center text-white rounded-4 gap-2" style={{backgroundColor: 'rgba(255, 255, 255, 0.10)', height: '24px', width: '47px'}}>
                        <i className="bi bi-suitcase"></i>
                        <span>{props.bag}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-center text-white rounded-4 gap-2" style={{backgroundColor: 'rgba(255, 255, 255, 0.10)', height: '24px', width: '142px'}}>
                        <i className="bi bi-gear-wide"></i>
                        <span>Manuelle/Auto</span>
                    </div>
                </div>


                <p className='text-light fs-5 fw-bold' style={{position: 'absolute', top: '355px', left: '15px'}}>{props.price} €/jour <span style={{ fontSize: 'small', color: 'gray' }}>{props.abon}</span></p>

            </div>

    );
}
 
export default Pastille;

