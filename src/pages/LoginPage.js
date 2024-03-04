import React from 'react';
import CustomizablePhoto from '../components/common/CustomizablePhoto';
import LoginFormContainer from '../components/login/LoginFormContainer';
import '../styles/login.module.css';

function LoginPage() {
  const photo = '../login.jpg';

  return (
    <>
      <main className='grid'>
        <section>
          <LoginFormContainer />
        </section>
        <section>
          <CustomizablePhoto src={photo} alt='login' />
        </section>
      </main>
    </>
  );
}

export default LoginPage;
