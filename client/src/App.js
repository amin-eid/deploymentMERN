import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update'
import Chat from './components/Chat'
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
 
<Routes>
             <Route element={<Main/>} path="/" />
             <Route element={<Detail/>} path="/app/:id" />
             <Route element={<Update/>} path="/app/:id/edit" />
         </Routes>      

{/* <Chat/> */}
    </div>
  );
}

export default App;
