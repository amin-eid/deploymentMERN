import React from 'react'
import axios from 'axios'
const DeleteButton = (props) => {

    const deletePerson=(e,id)=>{
        axios.delete("http://localhost:8000/api/people/"+id)
        .then(res=>props.myFun(id))
        .catch(err=>console.log(err))
      }
  return (
    
      <button onClick={(e)=>deletePerson(e,props.id)}>Delete ME!</button>
    
  )
}

export default DeleteButton
