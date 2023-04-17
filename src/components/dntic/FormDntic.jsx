import { getValue } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const FormDntic = ({
  demands,
  setDemands,
  setOneDemand,
  oneDemand
}) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState(null)
    
  useEffect(  () => {
      
    async function getDemands() {
       try {
         let response = await axios.get("http://localhost:4000/api/demands/getDemandsWithEmailChoose")
         console.log(response.data)
         setDemands([...response.data])
       } catch (error) {
         console.log(error)
       }
    }
    
      getDemands()
  }, [])
  
  const handleChange = (event) => { 
    setSelectedOption(event.target.value)
  }
  const valider = async (event, id) => {



    let body = {
      chosenEmailFormat : selectedOption
    }
    console.log(body,id)

      try {
        event.target.disabled = true
        await axios.post(`http://localhost:4000/api/demands/${id}/choose-email`,body)
    } catch (error) {
      console.log("une erreur",error)
    }
  }
  const emails = demands.map(demand => {
    return (
      <div className='mt-3' key={demand.id}>
        <input type="radio"
          name='email'
          value={demand.email_format1}
          checked={selectedOption === demand.email_format1}
          onChange={handleChange}
        />
        <label htmlFor='email' className='m1-2' >{demand.email_format1}</label><br />
        <input type="radio"
          name='email'
          value={demand.email_format2}
          checked={selectedOption === demand.email_format2}
          onChange={handleChange}
        />
        <label htmlFor='email' className='ms-2' >{demand.email_format2}</label><br />
        <input type="radio"
          name='email'
          value={demand.email_format3}
          checked={selectedOption === demand.email_format3}
          onChange={handleChange}
        />
        <label htmlFor='email' className='ms-2' >{demand.email_format3}</label><br />
       
        <div className='d-flex'>
          <Button   className='mt-2' onClick={(event)=> valider(event,demand.id)} >Valider</Button>
          <Button onClick={()=>details(demand)} className='mt-2 ms-3'>Détails</Button>
           </div>
       </div>
     )
  })

  
  const details = (demande) => {

    setOneDemand({
      nom: demande.name,
      prenom: demande.firstname,
      postnom: demande.lastname,
      fonction: demande.fonction,
      service: demande.service,
      phone: demande.numtel,
      email: demande.email,
      date : demande.createdAt

        })    
      navigate("/details" )
  }
  return (
    <div className='container col-4'>
    
          <form >
        {
          emails
           }
          
          </form>
    </div>
  );
};

export default FormDntic;
