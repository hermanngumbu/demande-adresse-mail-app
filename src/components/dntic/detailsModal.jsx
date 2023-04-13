import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

function MydModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Détails du formulaire 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>

          <Row>
            <Col xs={6} md={4}>
              Nom
            </Col>
            <Col xs={6} md={4}>
              Post-Nom
            </Col>
            <Col xs={6} md={4}>
              Prénom
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              Service
            </Col>
            <Col xs={6} md={4}>
              Fonction
            </Col>
            <Col xs={6} md={4}>
              Numéro de téléphone
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              Adresse Email
            </Col>
            
          </Row>
          <Row>
            <Col xs={6} md={4}>
              Email 1
            </Col>
            <Col xs={6} md={4}>
              Email 2
            </Col>
            <Col xs={6} md={4}>
              Email 3
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MydModalWithGrid
// function App() {
//   const [modalShow, setModalShow] = useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch modal with grid
//       </Button>

//       <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
//     </>
//   );
// }

// render(<App />);