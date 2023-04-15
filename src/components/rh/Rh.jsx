import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect } from 'react';
// import './formdntic.css';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';

const Rh = ({
    demands,
    setDemands
}) => {

    useEffect(() => {
        axios.get("http://localhost:4000/api/demands")
            .then((response) => {
                setDemands([...response.data])
            })
            .catch((error) => {
                console.log(error)
            })
    },[])

    const handleApprouver = async (id, event) => {
               
        try {
            event.target.disabled = true
            await axios.put(`http://localhost:4000/api/demands/${id}`)
        } catch (error) {
            console.log(error)
        }
          
    }

    const handleDelete = async (id) => {
          
        try {
            const index = demands.findIndex((item) => item.id === id)
            if (index !== -1) {
                demands.splice(index, 1)
                setDemands([...demands])
            }
            await axios.delete(`http://localhost:4000/api/demands/${id}`)
         
        } catch (error) {
            console.log(error)
        }
        
    }
    const allDemands = demands?.map((item) => {
        return (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.firstname}</td>
                <td>{item.email}</td>
                <td>{item.fonction}</td>
                <td>{item.service}</td>
                <td>{item.numtel}</td>
                <td>
                    <Button variant="primary" className='btn-sm'  onClick={(event) => handleApprouver(item.id,event)}>
                        Approuver
                    </Button>
                    <Button variant="danger" className='btn-sm ms-1'  onClick={() => handleDelete(item.id)}>
                        Rejeter
                    </Button>                  
                </td>
            </tr>

        )
    })
    return (
        <>

            <div className='principal-body'>
                <div>
                    <h1 className='principal-title'>Bienvenu Raphael Nathan</h1>
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
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allDemands
                            }
                        </tbody>
                    </Table>
               </div>
            </div>
        </>
    )
}

export default Rh
