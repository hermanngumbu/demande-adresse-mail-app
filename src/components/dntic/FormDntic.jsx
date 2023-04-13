import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import MydModalWithGrid from './detailsModal'
import './formdntic.css';
import {Button} from 'react-bootstrap';


const FormDntic = () => {
  const [modalShow, setModalShow] = useState(false); 
  
  return (
    <>
 
      <div className='principal-body'>
        <div>
          <h1 className='principal-title'>Bienvenu(e) Meschack Kapanga</h1>
        </div>
        <div className="principal-carte">
          <div className="carte-dntic">
            <div>
              <p>hermanngumbu@gmail.com</p>
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
        <div className="principal-carte">
          <div className="carte-dntic">
            <div>
              <p>hermanngumbu@gmail.com</p>
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
      </div>
    </>
  )
}

export default FormDntic