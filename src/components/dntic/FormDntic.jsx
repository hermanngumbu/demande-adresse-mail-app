import axios from 'axios';
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


const FormDntic = ({
  demands,
  setDemands
}) => {
  const { register, handleSubmit } = useForm();
    
  useEffect(  () => {
      
    async function getDemands() {
       try {
         let response = await axios.get("http://localhost:4000/api/demands")
         setDemands([...response.data])
       } catch (error) {
         console.log(error)
       }
    }
    
      getDemands()
   },[])
   
  const emails = demands.map(demand => {
    return (
      <div className='mt-3'>
        <input type="radio"  value={demand.email_format1} {...register("email")} />
        <label htmlFor='email' className='ms-2' >{demand.email_format1}</label><br />
        <input type="radio"  value={demand.email_format2} {...register("email")} />
        <label htmlFor='email' className='ms-2'>{demand.email_format2}</label><br />
        <input type="radio"  value={demand.email_format3} {...register("email")} />
        <label htmlFor='email' className='ms-2' >{demand.email_format3}</label><br />
        <div className='d-flex'>
          <Button type="submit"  className='mt-2'>Valider</Button>
          <Button onClick={()=>details(demand)} className='mt-2 ms-3'>Détails</Button>
           </div>
       </div>
     )
  })

  const valider = async (data) => {

    console.log(data)
    
  //   let body = {
  //     id: id,
  //     chosenEmailFormat : data.email 
  //   }
       
  //   try {
    
  //     await axios.post(`http://localhost:4000/api/demands/${id}/choose-email`,body)
  // } catch (error) {
  //   console.log("une erreur",error)
  // }
  }
  
  const details = (demande) => {
      console.log(demande)
  }
  return (
    <div className='container col-4'>
    
          <form onSubmit={handleSubmit(valider)} >
        {
          emails
           }
          
          </form>
    </div>
  );
};

export default FormDntic;
