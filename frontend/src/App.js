import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Signup from './app/signup/signup';
import RecruiterSignup from './app/RecruiterSignUp';
import Login from './pages/LoginPage';
import JobBoard from './pages/jobboard';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='recruiter_signup' element={<RecruiterSignup />} />
          <Route path='/LoginPage' element={<Login />} />
          <Route path='/jobboard' element={<JobBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
