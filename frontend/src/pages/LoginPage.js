import React from 'react';
import CustomizablePhoto from '../components/common/CustomizablePhoto';
import LoginFormContainer from '../components/login/LoginFormContainer';
import photo from '../images/login.jpg';

function LoginPage() {
  return (
    <>
      <main className='bg-cream font-poppins h-screen flex items-center justify-center'>
        <section className='flex-1 flex justify-center items-center'>
          <LoginFormContainer />
        </section>
        <section className='flex-1'>
          <CustomizablePhoto src={photo} alt='login' />
        </section>
      </main>
    </>
  );
}

export default LoginPage;
