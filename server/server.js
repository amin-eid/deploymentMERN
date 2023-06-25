const express = require('express');
const cors = require('cors');
const app = express();
require('./config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./routes/person.routes')(app);
const server=app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

const io = require('socket.io')(server, { cors: true });

io.on("connection",socket=>{
    console.log(socket.id);
    // io.emit("test","Hiiiiiii from server");
    socket.on("event1",data=>{
        io.emit("svr",data)
    })
})