import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const PrivateRouting = ({component}) => {
   let navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login){
            navigate('/login')
        }
    },[])
  return (
    <div>
        {component}
    </div>
  )
}

export default PrivateRouting