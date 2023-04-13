import React from 'react'
import Navbar from '../navbar/Navbar'
import './formdntic.css'

const FormDntic = () => {
  return (
    <>
      <Navbar />
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
                <button className='btn-detail'>Détails</button>
              </div>
              <div>
                <button className='btn-detail'>Approuver</button>
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
                <button className='btn-detail'>Détails</button>
              </div>
              <div>
                <button className='btn-detail'>Approuver</button>
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
                <button className='btn-detail'>Détails</button>
              </div>
              <div>
                <button className='btn-detail'>Approuver</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormDntic