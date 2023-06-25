import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import DeleteButton from '../components/DeleteButton';
const PersonList = (props) => {
  
  return (
    <div>
      {props.all.map((pers,i)=><p key={i}><Link to={"app/"+pers._id}> {pers.firstName} {pers.lastName}</Link><DeleteButton id={pers._id} myFun={()=>props.fun1(pers._id)}/></p>)}
    </div>
  )
}

export default PersonList
