import './App.css';
import Login from './login';
import HomePage from './HomePage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AppBar, Button, Toolbar } from '@mui/material';
import Signup from './signup';
import EmailSending from './Emails';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
const navigate = useNavigate()

  return (
        <div className="App">
          <AppBar className='AppBar' position="static">
            <Toolbar className='appbar-tools'>
              <h2 color="inherit" className='project-name'onClick={()=>navigate('/')}>BULK Mail</h2>
             
              <div>
                <Button color="inherit" onClick={()=> navigate('/login')} className='appbar-msicon'>login</Button>
              
              </div>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/email' element={<EmailSending />} />
          </Routes>
          <ToastContainer />
        </div>


  );
}

export default App;
