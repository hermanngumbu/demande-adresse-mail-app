import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './userForm.css';
import { Container, FloatingLabel, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useForm } from "react-hook-form"
import axios from "axios";


function App() {

    const [validated, setValidated] = useState(false);
  const { register, handleSubmit, reset,watch,setValue } = useForm()
  const prenom = watch('prenom');
  const nom = watch('nom');

  const generateEmails = () => {
    const emails = [];
    if (prenom && nom) {
      emails.push(`${prenom}.${nom}@presidence.cd`);
      emails.push(`${prenom[0]}.${nom}@presidence.cd`);
      emails.push(`${prenom}${nom[0]}@presidence.cd`);
    }
    return emails;
  };
  if (Object.keys(generateEmails()).length > 0) {
     setValue('mail1', generateEmails()[0])
     setValue('mail2', generateEmails()[1])
     setValue('mail3', generateEmails()[2])
   }
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const submitData = (data) => {
    let body = {
      name: data.nom,
      firstname: data.prenom,
      lastname: data.postnom,
      fonction: data.fonction,
      service: data.service,
      numtel: data.phone,
      email: data.emailprivate,
      email_format1: data.mail1,
      email_format2: data.mail2,
      email_format3: data.mail3,

    }
    axios.post("http://localhost:4000/api/demands", body)
      .then((response) => {
        console.log(response)
        togglePopup();
      })
      .catch((error) => { 
        console.log(error)
      })
  
    // reset()

      }


  return (
    <>
   
    <div className="title">  
    <p class="h1 text-center">Fiche  de demande d’adresse mail présidence RDC</p>
    </div>
    <div className='form-wrapper'>
        <Form noValidate validated={validated} onSubmit={handleSubmit(submitData)}>
        <h2 style={{ marginBottom: '15px', textAlign: 'center' }}>
        Merci de renseigner toutes vos informations &#9997;
        </h2>
        <Container fluid>
          <Row>
            <Col sm={6} style={{ marginBottom: '10px' }}>
                <FloatingLabel controlId='firstnamLabel' label='Nom' >
                  <Form.Control type='text' placeholder='Nom' required {...register('nom',{required:true})} />
              </FloatingLabel>
            </Col>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <FloatingLabel controlId='lastnameLabel' label='Post-Nom'>
                  <Form.Control type='text' placeholder='Post-Nom' {...register('postnom', { required: true })} />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <FloatingLabel controlId='firstnamLabel' label='Prénom'>
                  <Form.Control type='text' placeholder='Prénom' required  {...register('prenom', { required: true })} />
              </FloatingLabel>
            </Col>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <FloatingLabel controlId='lastnameLabel' label='Téléphone'>
                  <Form.Control type='text' placeholder='Téléphone'  {...register('phone', { required: true })} />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <FloatingLabel controlId='emailLabel' label='Email privé'>
                  <Form.Control type='email' placeholder='Email privé'
                    required pattern='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'  {...register('emailprivate', { required: true })} />
              </FloatingLabel>
              
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className='mb-3' controlId=''>
              <FloatingLabel controlId='servicelLabel' label='Service'>
                  <select class="form-select" id="floatingSelect"  {...register('service', { required: true })}>
                <option selected>Selectionner votre service</option>
                    <option value="Information Technologie">Information Technologie</option>
                    <option value="Human ressources">Human ressources</option>
                    <option value="Acount management">Acount management</option>
              </select>
              </FloatingLabel>
              
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className='mb-3' controlId=''>
              <FloatingLabel controlId='fonctionlLabel' label='Fonction'>
                  <select class="form-select" id="floatingSelect"  {...register('fonction', { required: true })}>
                <option selected>Selectionner votre fonction</option>
                    <option value="Fonction 1">Fonction 1</option>
                    <option value="Fonction 2">Fonction 2</option>
                    <option value="Fonction 3">Fonction 3</option>
              </select>
              </FloatingLabel>
              
            </Form.Group>
          </Row>

          <Row>
            <Form.Group>
            <h2>
            Suggestion Adresse Mail &#9993;
              </h2>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className='mb-3' controlId=''>
            <div class="row mb-3">
            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">mail 1</label>
            <div class="col-sm-10">
                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm"
                      placeholder="hermanngumbu@presidence.cd" disabled  {...register('mail1')} />
            </div>
            </div>

            </Form.Group>

          </Row>
          <Row>
            <Form.Group className='mb-3' controlId=''>
            <div class="row mb-3">
            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">mail 2</label>
            <div class="col-sm-10">
                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm"
                      placeholder="hermanngumbu@presidence.cd" disabled  {...register('mail2')} />
            </div>
            </div>

            </Form.Group>

          </Row>
          <Row>
            <Form.Group className='mb-3' controlId=''>
            <div class="row mb-3">
            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">mail 3</label>
            <div class="col-sm-10">
                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm"
                      placeholder="hermanngumbu@presidence.cd" disabled  {...register('mail3')} />
            </div>
            </div>

            </Form.Group>

          </Row>
          <Row>
             <div class="d-grid gap-2 col-12 mx-auto">
            <button class="btn btn-primary" type="submit">SOUMETTRE &#10004;</button>
            </div>
          </Row>
          
        </Container>
        </Form>
        {isOpen && (
          <div className="popup">
            <div className="popup-inner">
              <h2>Merci d'avoir soumis le formulaire</h2>
              <button onClick={togglePopup}>Fermer</button>
            </div>
          </div>
        )}
    </div>
    </>
  );
}

export default App;