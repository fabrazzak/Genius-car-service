import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServices from '../../useServices';

const ServicesDetails = () => {
    const {serviceId}=useParams();
    const handleProceedCart=()=>{

    }
  
   
   

    

    return (
        <div className='container py-5 my-5 text-center'>
            <h1>This is services Details{serviceId} </h1>
            <Link to="/checkout"><button className='btn btn-primary btn-lg my-5 py-3 px-5' onClick={handleProceedCart}>Proceed Cart </button></Link>
        </div>
    );
};

export default ServicesDetails;