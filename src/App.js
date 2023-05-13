import  './App.css';
import SignUp from './SignUp';
import Login from './Login';
import PrivateRouter from './PrivateRouter';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router  ,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div  style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)'}}>
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight:"100vh"}}>
         <Router>
          <Routes>
              <Route path="/" element={<PrivateRouter />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
          </Routes>
         </Router>
    </Container>
    </div>
  );
}

export default App;
