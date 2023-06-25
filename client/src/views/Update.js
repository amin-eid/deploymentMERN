import React, { useState,useEffect } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import PersonForm from '../components/PersonForm';
import DeleteButton from '../components/DeleteButton';
const Update = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [loaded,setLoaded]=useState(false)
    const [errors,setErrors]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/people/"+id)
        .then(res=>{setFirstName(res.data.firstName);setLastName(res.data.lastName);setLoaded(true);console.log(res.data)})
        .catch(err=>console.log(err))
    },[])
const handleSubmit=(person)=>{

axios.put("http://localhost:8000/api/people/"+id+"/edit",person)
.then(res=>navigate("/"))
.catch(err=>console.log(err))
}
const deleteme=()=>{
  axios.delete("http://localhost:8000/api/people/"+id)
  .then(res=>navigate("/"))
  .catch(err=>console.log(err))
}
const go=()=>{
  navigate("/")
}
  return (
    <div>
    
    {loaded && <PersonForm initialfname={firstName} initiallname={lastName} myFun={handleSubmit} err={errors}/>}
    <DeleteButton id={id} myFun={go}/>
       {/* <form onSubmit={handleSubmit}>
        <p>First Name: <input type="text" onChange={e=>setFirstName(e.target.value)} value={loaded && firstName}></input></p>
        <p>Last Name: <input type="text" onChange={e=>setLastName(e.target.value)} value={loaded &&  lastName}></input></p>
      <input type="submit" value="Send!"></input>
      </form> */}
    </div>

  )
}

export default Update
