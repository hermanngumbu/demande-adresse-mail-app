import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react';
import MydModalWithGrid from './detailsModal'
import './formdntic.css';
import {Button} from 'react-bootstrap';
import axios from 'axios';


const FormDntic = () => {
  const [modalShow, setModalShow] = useState(false);


  const [demands, setDemands] = useState([])
  // const [isDisabled, setIsDisabled] = useState(false);


  useEffect(() => {
    axios.get("http://localhost:4000/api/demands/getDemandsWithEmailChoose")
      .then((response) => {
        setDemands([...response.data])
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  const handleClick = (event) => {
    event.target.disabled = true
  }
  const allDemands = demands.map((demand) => {
    return (
      <div className="principal-carte" key={demand.id}>
        <div className="carte-dntic">
          <div>
            <p>{demand.email_choose}</p>

          </div>
          <div className='btn-right'>
            <div>
              <Button variant="success" onClick={(event) => handleClick( event)}>Approuvé</Button>
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
          <h1 className='principal-title'>Bienvenu(e) Meschack Kapanga</h1>
        </div>
        {
          allDemands
         }
      </div>
    </>
  )
}

export default FormDntic