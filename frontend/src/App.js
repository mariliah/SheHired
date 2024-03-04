import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signup from './app/signup/signup';
import RecruiterSignup from './app/RecruiterSignUp';
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
    </div>
  );
}

export default App;
