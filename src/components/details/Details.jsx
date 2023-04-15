import React from 'react'
import { Form, Table } from 'react-bootstrap'

const Details = ({
    oneDemand
}) => {


  return (
      <>
          <div className='principal-body'>
              <div>
                  <h1 className='principal-title text-center'>Détails</h1>
              </div>
              <div className="container">
                  <Table striped bordered hover>
                      <thead>
                          <tr>
                              <th>Nom</th>
                              <th>Post-Nom</th>
                              <th>Prénom</th>
                              <th>Email privé</th>
                              <th>Fonction</th>
                              <th>Service</th>
                              <th>Numéro Téléphone</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>{oneDemand.nom}</td>
                              <td>{oneDemand.postnom}</td>
                              <td>{oneDemand.prenom}</td>
                              <td>{oneDemand.email}</td>
                              <td>{oneDemand.fonction}</td>
                              <td>{oneDemand.service}</td>
                              <td>{oneDemand.phone}</td>
                              <td>
                              </td>
                          </tr>
                      </tbody>
                  </Table>
              </div>
          </div>
      </>
  )
}

export default Details