import React,{useState} from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
const PersonForm = (props) => {
    const [firstName,setFirstName]=useState(props.initialfname)
    const [lastName,setLastName]=useState(props.initiallname)
    
const handleSubmit=(e)=>{
e.preventDefault();
props.myFun({firstName,lastName});
}
  return (
    <div>
      {props.err.map((err,i)=><p key={i}>{err}</p>)}
      <form onSubmit={handleSubmit}>
        <p>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={e=>setFirstName(e.target.value) } value={firstName}/>
        </p>
        <p>
        <TextField id="filled-basic" label="Filled" variant="filled" onChange={e=>setLastName(e.target.value)} value={lastName} />
        </p><input type="submit" value="Send!"></input>
      </form>

    </div>
  )
}

export default PersonForm
