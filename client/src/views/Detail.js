import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
const Detail = () => {
    const [user,setUser]=useState();
    const [loaded,setLoaded]=useState(false);
    const {id}=useParams();
    useEffect(()=>{
        axios.get("http://localhost:8000/api/people/"+id)
        .then(res=>{setUser(res.data);setLoaded(true)})
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
        {loaded && user.firstName  + " "+ user.lastName}
   
    </div>
  )
}

export default Detail
