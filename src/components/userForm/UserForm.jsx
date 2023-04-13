import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './userForm.css';
import { Container, FloatingLabel, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function App() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
         setValidated(true);
      };

    

  return (
    <>
   
    <div className="title">  
    <p class="h1 text-center">Fiche  de demande d’adresse mail présidence RDC</p>
    </div>
    <div className='form-wrapper'>
      <Form noValidate validated={validated}>
        <h2 style={{ marginBottom: '15px', textAlign: 'center' }}>
        Merci de renseigner toutes vos informations &#9997;
        </h2>
        <Container fluid>
          <Row>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <FloatingLabel controlId='firstnamLabel' label='Nom'>
                <Form.Control type='text' placeholder='Nom' required />
              </FloatingLabel>
            </Col>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <FloatingLabel controlId='lastnameLabel' label='Post-Nom'>
                <Form.Control type='text' placeholder='Post-Nom' />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <FloatingLabel controlId='firstnamLabel' label='Prénom'>
                <Form.Control type='text' placeholder='Prénom' required />
              </FloatingLabel>
            </Col>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <FloatingLabel controlId='lastnameLabel' label='Téléphone'>
                <Form.Control type='tel' placeholder='Téléphone' />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <FloatingLabel controlId='emailLabel' label='Email privé'>
                <Form.Control type='email' placeholder='Email privé' required pattern='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$' />
              </FloatingLabel>
              
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className='mb-3' controlId=''>
              <FloatingLabel controlId='servicelLabel' label='Service'>
              <select class="form-select" id="floatingSelect">
                <option selected>Selectionner votre service</option>
                <option value="1">Information Technologie</option>
                <option value="2">Human ressources</option>
                <option value="3">Acount management</option>
              </select>
              </FloatingLabel>
              
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className='mb-3' controlId=''>
              <FloatingLabel controlId='fonctionlLabel' label='Fonction'>
              <select class="form-select" id="floatingSelect">
                <option selected>Selectionner votre fonction</option>
                <option value="1">Fonction 1</option>
                <option value="2">Fonction 2</option>
                <option value="3">Fonction 3</option>
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
                <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="hermanngumbu@presidence.cd" disabled/>
            </div>
            </div>

            </Form.Group>

          </Row>
          <Row>
            <Form.Group className='mb-3' controlId=''>
            <div class="row mb-3">
            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">mail 1</label>
            <div class="col-sm-10">
                <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="hermanngumbu@presidence.cd" disabled/>
            </div>
            </div>

            </Form.Group>

          </Row>
          <Row>
            <Form.Group className='mb-3' controlId=''>
            <div class="row mb-3">
            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">mail 1</label>
            <div class="col-sm-10">
                <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="hermanngumbu@presidence.cd" disabled/>
            </div>
            </div>

            </Form.Group>

          </Row>
          <Row>
             <div class="d-grid gap-2 col-12 mx-auto">
            <button class="btn btn-primary" type="button" onClick={handleSubmit}>SOUMETTRE &#10004;</button>
            </div>
          </Row>
          
        </Container>
      </Form>
    </div>
    </>
  );
}

export default App;