import React,{useState,useEffect} from 'react'
import io from 'socket.io-client';
const Chat = () => {
    const [socket] = useState(() => io(':8000'));
    const [txt,setTxt]=useState("");
    const [chat,setChat]=useState([]);
    useEffect(()=>{
        // socket.on("test",(data)=>console.log(data));
        socket.on("svr",data=>setChat([...chat,data]))
        
    })
    const handleClick=(e)=>{
        e.preventDefault();
        socket.emit("event1",txt);
        
        setTxt("")
    }
  return (

    <div>
        {chat.map((cht,i)=><p key={i}>{cht}</p>)}
      <input type="text" onClick={e=>setTxt(e.target.value)}/>
      <button onClick={handleClick}>chat!</button>
    </div>
  )
}

export default Chat
