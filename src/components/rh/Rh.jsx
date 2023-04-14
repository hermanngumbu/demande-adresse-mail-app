import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react';
import MydModalWithGrid from '../dntic/detailsModal'
// import './formdntic.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Rh = () => {
    const [modalShow, setModalShow] = useState(false);

    const [demands, setDemands] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/api/demands")
            .then((response) => {
               setDemands([...response.data])
            })
            .catch((error) => { 
                console.log(error)
            })
    }, [])
    
    const allDemands = demands.map((demand) => {
        return (
            <div className="principal-carte" key={demand.id}>
                <div className="carte-dntic">
                    <div>
                        <label>{ demand.email_format1}</label>
                        <p>{ demand.email_format2}</p>
                        <p>{ demand.email_format3}</p>
                      
                    </div>
                    <div className='btn-right'>
                        <div>
                            <Button variant="success">Approuvé</Button>{' '}
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