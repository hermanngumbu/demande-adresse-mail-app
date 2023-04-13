import React from 'react'
import { useForm } from 'react-hook-form'
// import Navbar from '../navbar/Navbar'
import './login.css'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    
    const submitData = (data) => { 
          console.log(data)
    }
  return ( 
      <>       
          <div className='principal'>
              <div className='carte'>
                  <div>
                      <div>
                          <h1 className='carte-title'>Authentification</h1>
                      </div>
                      <div>
                          <form className='formulaire' onSubmit={handleSubmit(submitData)} >
                              <div>
                                  <div className='formulaire-input'>
                                      <div>
                                          <label htmlFor="">Votre adresse mail</label>
                                      </div>
                                      <div className='formulaire-input-text'>
                                          <input type="email" {...register('email')} />
                                          {errors.email && <p>email is required </p>}
                                      </div>
                                  </div>
                                  <div className='formulaire-input'>
                                      <div>
                                          <label htmlFor="">Votre mot de passe</label>
                                      </div>
                                      <div>
                                          <input type="password" {...register('password')} />
                                      </div>
                                  </div>
                                  <div>
                                      <button type='submit' className='btn-connexion'>SE CONNECTER</button>
                                  </div>
                               </div>
                          </form>
                      </div>
                 </div>
              </div>
          </div>
      </>
  )
}

export default Login