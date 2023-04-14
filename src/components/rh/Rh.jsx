import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react';
import MydModalWithGrid from '../dntic/detailsModal'
// import './formdntic.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Rh = () => {
    const [modalShow, setModalShow] = useState(false);

    const [demands, setDemands] = useState([])
   // const [isDisabled, setIsDisabled] = useState(false);


    useEffect(() => {
        axios.get("http://localhost:4000/api/demands")
            .then((response) => {
               setDemands([...response.data])
            })
            .catch((error) => { 
                console.log(error)
            })
    }, [])
    
    const handleClick = (email, demandId,event) => {
        
        console.log(demandId,email)
        
        let body = {
            id: demandId,
            chosenEmailFormat: email
        }
        event.target.disabled = true
        axios.post(`http://localhost:4000/api/demands/${demandId}/choose-email`,body)
            .then((response) => { 
                console.log(response)
            })
            .catch((error) => { 
                console.log(error)
            })
        
    }

    const allDemands = demands.map((demand) => {
        return (
            <div className="principal-carte" key={demand.id}>
                <div className="carte-dntic">
                    <div>
                        <p>{ demand.email_format1}</p>
                        <p>{ demand.email_format2}</p>
                        <p>{ demand.email_format3}</p>
                      
                    </div>
                    <div className='btn-right'>
                        <div>
                            <Button  variant="success" onClick={ (event)=> handleClick(demand.email_format3, demand.id,event)}>Approuvé</Button>
                        </div>
                        <div>
                            <Button variant="danger">Réjetté</Button>{' '}
                        </div>
                        <div>
                            <Button variant="info" onClick={() => setModalShow(true)}>Détails</Button>{' '}
                            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>

            <div className='principal-body'>
                <div>
                    <h1 className='principal-title'>Bienvenu(e) Raphael Nathan</h1>
                </div>
                {
                    allDemands
               }
            </div>
        </>
    )
}

export default Rh