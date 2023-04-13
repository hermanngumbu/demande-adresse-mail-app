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
       
          <div className='main'>
              <div className='card'>
                  <div className="card-body">
                      <div>
                          <h1 className='card-title'>Authentification</h1>
                      </div>
                      <div>
                          <form className='form' onSubmit={handleSubmit(submitData)} >
                              <div className='form-input'>
                                  <div>
                                      <label htmlFor="">Votre adresse mail</label>
                                  </div>
                                  <div className='form-input-text'>
                                      <input type="email" {...register('email')} />
                                      {errors.email && <p>email is required </p> }
                                  </div>
                              </div>
                              <div className='form-input'>
                                  <div>
                                      <label htmlFor="">Votre mot de passe</label>
                                  </div>
                                  <div className='form-input-text'>
                                      <input type="password" {...register('password')} />
                                  </div>
                              </div>
                              <div>
                                  <button type='submit' className='btn-connexion'>SE CONNECTER</button>
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