import React from 'react'
// import { useForm } from 'react-hook-form'
// import Navbar from '../navbar/Navbar'
import log from '../../images/log.png';

import './login.css'

import {Button} from 'react-bootstrap'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';

const Login = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm()
    
//     const submitData = (data) => { 
//           console.log(data)
//     }
  return (
      <>
       
          {/* <div className='main'>
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
          </div> */}



    <MDBContainer className='my-5 m-14'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src={log} alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody>

              <MDBInput wrapperClass='mb-4' label='Adresse Email' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Mot de passe' id='form2' type='password'/>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Se souvenir de moi' />
                <a href="!#">Mot de passe oublier ?</a>
              </div>

              {/* <MDBBtn className="mb-4 w-100">Se Connecter</MDBBtn> */}
              <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                Block level button
              </Button>
              </div>
             

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
</>
  )
}

export default Login;