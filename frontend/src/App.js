import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Signup from "./app/Signup";
import RecruiterSignup from "./app/RecruiterSignUp";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="recruiter_signup" element={<RecruiterSignup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
