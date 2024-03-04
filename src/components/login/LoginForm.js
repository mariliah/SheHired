import { useState } from 'react';
import './styles.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password)', password);
  };

  return (
    <form onSubmit={handleLogin} class='login-form'>
      <h2>LOGIN TO YOUR ACCOUNT</h2>
      <p>ENTER YOUR DETAILS</p>
      <label htmlFor='email'>EMAIL ADDRESS</label>
      <input
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='password'>PASSWORD</label>
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>LOGIN</button>
      <p>
        NEED AN ACCOUNT? <b>SIGN UP HERE</b>
      </p>
    </form>
  );
}

export default LoginForm;
