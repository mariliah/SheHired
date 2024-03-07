import React,{ useState } from "react";
import userIcon from '../../images/user.png';
import emailIcon from '../../images/Mail.png';
import passwordIcon from '../../images/Password.png';
import { Link } from 'react-router-dom';
import {
  emailValidator,
  passwordValidator,
} from '../../composables/loginFormValidation';

import SignupVerification from '../../composables/signUpVerificationLayout';

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType,setAccountType] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    const validEmail = emailValidator(e.target.value);
    setEmail(e.target.value);
    setEmailError(validEmail ? '' : '*Please enter a valid email');
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    const validPassword = passwordValidator(e.target.value);
    setPassword(e.target.value);
    setPasswordError(validPassword ? '' : '*Password must be at least 8 characters');
    setSubmitted(false);
  };

  const handleAccountType = (e) =>{
    setAccountType(e.target.value);
    setSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
      setSubmitted(false); 
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
  

  return (
    <>
    <section>
    {!submitted ? (
        <section className="w-full md:block py-20 font-poppins mx-12">
          <h1 className="font-bold text-2xl">CREATE A NEW ACCOUNT</h1>
          <p>ENTER YOUR DETAILS TO REGISTER</p>
          <form className="flex flex-col mt-10" onSubmit={handleSubmit}>

            <div className="input-container relative w-full">
            <label htmlFor="name">NAME</label>
            <img src={userIcon} alt='User' className="absolute left-3 top-11 transform -translate-y-1/2 h-5 w-5" />
            <input
              id="name"
              type="text"
              className={`w-full bg-cream pr-4 py-2 pl-10 bg-cream rounded-10 border-2 border-grey focus:bg-white ${
                error && name=== "" ? 'border-scarlet' : 'border-input-border'
              } w-full ${error && name=== "" ? 'mb-1' : 'mb-4'}`}
              onChange={handleName}
              value={name}
            />
            </div>

            <div className="input-container relative w-full">
            <label htmlFor="email" >EMAIL ADDRESS</label>
              <img src={emailIcon} alt='Email' className="absolute left-3 top-11 transform -translate-y-1/2 h-5 w-5" />
              <input
                id="email"
                name="email"
                type="email"
                className={`w-full bg-cream pr-4 py-2 pl-10 bg-cream rounded-10 border-2 border-grey focus:bg-white ${
                  error && email=== "" ? 'border-scarlet' : 'border-input-border'
                } w-full ${error && email=== "" ? 'mb-1' : 'mb-4'}`}
                onChange={handleEmail}
                value={email}
              />
              {submitted && emailError && <p className='text-sm text-scarlet'>{emailError}</p>}
            </div>

            <div className="input-container relative w-full">
            <label htmlFor="password" >PASSWORD</label>
            <img src={passwordIcon} alt='lock' className="absolute left-3 top-11 transform -translate-y-1/2 h-5 w-5" />
            <input
              id="password"
              type="password"
              className={`w-full bg-cream pr-4 py-2 pl-10 bg-cream rounded-10 border-2 border-grey focus:bg-white ${
                error && password === "" ? 'border-scarlet' : 'border-input-border'
              } w-full ${error && password === "" ? 'mb-1' : 'mb-4'}`}
              
              onChange={handlePassword}
              value={password}
            />
            {submitted && passwordError && <p className='text-sm text-scarlet'>{passwordError}</p>}
            </div>

            <section className="flex items-center justify-center mt-9">
              <input type="radio" name="utype" className="accent-crimson" onChange={handleAccountType} value="student" checked={accountType === "student"} />
              <label htmlFor="utype" className="mx-4">
                STUDENT
              </label>
              <input type="radio" name="utype" className="accent-crimson" onChange={handleAccountType} value="early-career" checked={accountType === "early-career"} />
              <label htmlFor="utype" className="mx-4">
                EARLY CAREER
              </label>
            </section>

            <button className="bg-crimson text-frostyMist w-full h-12 rounded-2xl mt-10" type="submit">
              SIGN UP
            </button>
          </form>
          <p className="text-center mt-10">
            ALREADY HAVE AN ACCOUNT?
            <Link to='/loginpage'className="font-bold">
              LOGIN HERE
            </Link>
          </p>
        </section>
        ) : (
          <SignupVerification userEmail={email}/>
        )}
      </section>
    </>
  );
}
