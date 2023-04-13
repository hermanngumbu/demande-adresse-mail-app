import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import Navbar from '../navbar/Navbar'
import log from '../../images/log.png';
import './login.css'
import axios from 'axios'

import { Button } from 'react-bootstrap'
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
}
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()

      const submitData = (data) => { 
        console.log(data)
        let body = {
          email: data.email,
          password: data.password
        }
        axios.post("http://localhost:4000/api/auth/login", body)
          .then((response) => {
         
            if (response.data.token.user.name === "Dntic_User") {
              navigate("/validation-dntic")
            } else if (response.data.token.user.name === "Rh_User") {
              navigate("/validation-rh")
            }
          })
          .catch((error) => { 
            console.log(error)
          })
        reset()
  } 
  return (
    <>
      <MDBContainer className='my-5 m-14'>
        <MDBCard>

          <MDBRow className='g-0 d-flex align-items-center'>

            <MDBCol md='4'>
              <MDBCardImage src={log} alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
            </MDBCol>

            <MDBCol md='8'>

              <MDBCardBody>

                <form onSubmit={handleSubmit(submitData)}>
                  <MDBInput wrapperClass='mb-4' label='Adresse Email' id='form1' type='email' {...register('email')} />
                  <MDBInput wrapperClass='mb-4' label='Mot de passe' id='form2' type='password' {...register('password')} />

                  {/* <MDBBtn className="mb-4 w-100">Se Connecter</MDBBtn> */}
                  <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" type='submit'>
                      Se connecter
                    </Button>
                  </div>
                </form>


              </MDBCardBody>

            </MDBCol>

          </MDBRow>

        </MDBCard>
      </MDBContainer>
    </>
  )
}

export default Login;