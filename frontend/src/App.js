<<<<<<< HEAD
import "./App.css";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Home />
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Signup from './pages/Signup';
import RecruiterSignup from './pages/RecruiterSignUp';
import Login from './pages/LoginPage';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='recruiter_signup' element={<RecruiterSignup />} />
          <Route path='/LoginPage' element={<Login />} />
        </Routes>
      </Router>
>>>>>>> 2a3d0bd4dadd8d5d8ce09610f39f6f09d1843fa6
    </div>
  );
}

export default App;
