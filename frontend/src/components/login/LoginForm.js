import { useState } from 'react';
import { Link } from 'react-router-dom';

import emailIcon from '../../images/Mail.png';
import passwordIcon from '../../images/Password.png';

import {
  emailValidator,
  passwordValidator,
} from '../../composables/loginFormValidation';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const validEmail = emailValidator(email);
    const validPassword = passwordValidator(password);

    if (validEmail === true && validPassword === true) {
      try {
        console.log('Login successful');
        setErrorMessage('');
      } catch (error) {
        let customMessage;
        if (error.code === 'auth/user-not-found') {
          customMessage = 'No user with this email found.';
        } else if (error.code === 'auth/wrong-password') {
          customMessage = 'Wrong password provided.';
        } else if (error.code === 'auth/too-many-requests') {
          customMessage =
            'Too many unsuccessful login attempts. Please try again later.';
        } else {
          customMessage = 'An error occurred during login.';
        }
        setErrorMessage(customMessage);
      }
    } else {
      if (validEmail !== true) {
        setEmailError(validEmail);
      } else {
        setEmailError('');
      }

      if (validPassword !== true) {
        setPasswordError(validPassword);
      } else {
        setPasswordError('');
      }
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className='flex flex-col items-start w-full relative'
    >
      <h2 className='mb-0 text-3xl text-crimson font-semibold'>
        LOGIN TO YOUR ACCOUNT
      </h2>
      <p className='mt-0 mb-24 text-sm text-crimson font-extralight'>
        ENTER YOUR DETAILS
      </p>

      <div className='input-container relative w-full'>
        <label htmlFor='email' className='text-slate text-sm relative'>
          <img
            src={emailIcon}
            alt='Email'
            className='absolute left-3 top-10 transform -translate-y-1/2 h-5 w-5'
          />
          EMAIL ADDRESS
        </label>
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`pr-4 py-2 pl-10 bg-cream rounded-10 border-2 border-grey ${
            emailError ? 'border-scarlet' : 'border-input-border'
          } w-full ${emailError ? 'mb-1' : 'mb-4'}`}
        />
        {emailError && <p className='text-sm text-scarlet'>{emailError}</p>}
        {loginError && <p className='text-sm text-scarlet'>{loginError}</p>}
      </div>

      <div className='input-container relative w-full'>
        <label
          htmlFor='password'
          className={`text-slate text-sm relative ${
            emailError ? 'mb-2' : 'mb-8'
          }`}
        >
          PASSWORD
        </label>

        <img
          src={passwordIcon}
          alt='Password'
          className='absolute left-3 top-11 transform -translate-y-1/2 h-5 w-5 '
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`pr-4 py-2 pl-10 bg-cream rounded-10 border-2 ${
            passwordError ? 'border-scarlet' : 'border-grey'
          } w-full ${passwordError ? 'mb-2' : 'mb-28'}`}
        />
        {passwordError && (
          <p className='text-sm text-scarlet'>{passwordError}</p>
        )}
      </div>

      {(passwordError || emailError) && <div className='mb-16'></div>}
      <button
        type='submit'
        className='px-4 py-2 rounded-10 border-none bg-crimson text-cream font-medium text-xl cursor-pointer w-full'
      >
        LOGIN
      </button>
      <div className='flex justify-center w-full'>
        <p className='text-slate text-xs mt-6'>
          NEED AN ACCOUNT?{' '}
          <Link to='/signup' className='font-bold'>
            {' '}
            SIGN UP HERE{' '}
          </Link>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
