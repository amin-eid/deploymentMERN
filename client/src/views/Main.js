import React,{useEffect, useState} from 'react'
import PersonForm from '../components/PersonForm'
import axios from 'axios'
import PersonList from '../components/PersonList';

const Main = () => {
  const [people,setPeople]=useState([]);
  const [errors,setErrors]=useState([]);

useEffect(()=>{
axios.get("http://localhost:8000/api/people")
.then(result=>setPeople(result.data))
.catch(err=>console.log(err))
},[])


const handleSubmit=(person)=>{

  axios.post("http://localhost:8000/api/people",person)
  .then(res=>setPeople([...people,res.data]))
  .catch(err=>{
    const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
  }

  const deletePerson=(id)=>{
    setPeople(people.filter(person=>person._id !=id))
  }


  return (
    <div>
      <PersonForm initialfname="" initiallname="" myFun={handleSubmit} err={errors}/>
      <PersonList all={people}  fun1={deletePerson}/>
    </div>
  )
}

export default Main
