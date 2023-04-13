import React from 'react'
import Navbar from '../navbar/Navbar'
import './formDntic.css'

const FormDntic = () => {
  return (
      <>
          <Navbar />
          <div className='main-body'>
              <div>
                  <h1 className='main-title'>Bienvenu(e) Meschack Kapanga</h1>
              </div>
              <div className="main-card">
                  <div className="card-dntic">
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
              <div className="main-card">
                  <div className="card-dntic">
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
              <div className="main-card">
                  <div className="card-dntic">
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