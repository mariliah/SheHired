import { useState } from 'react';

import emailIcon from '../../images/Mail.png';
import passwordIcon from '../../images/Password.png';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password)', password);
  };

  return (
    <form onSubmit={handleLogin} className='flex flex-col items-start w-full'>
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
          className='mb-4 pr-4 py-2 bg-cream  rounded-10 border-2 border-input-border  w-full'
        />
      </div>

      <div className='input-container relative w-full'>
        <label htmlFor='password' className='text-slate text-sm relative'>
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
          className='mb-28  pr-4  py-2 bg-cream rounded-10 border-2 border-input-border  w-full'
        />
      </div>

      <button className='px-4 mb-11 py-2 rounded-10 border-none bg-crimson text-cream font-medium text-xl cursor-pointer w-full'>
        LOGIN
      </button>
      <div className='flex justify-center w-full'>
        <p className='text-slate text-xs'>
          NEED AN ACCOUNT? <b> SIGN UP HERE </b>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
