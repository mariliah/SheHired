import React from 'react';
import FooterBar from '../components/common/FooterBar';
//import NavBar from '../components/common/NavBar';
import JobInfo from '../components/jobboard/JobInfoCard';
import Logo from '../images/SheHired.png';

function jobboard() {
  return (
    <div className='bg-cream'>
      {/* <NavBar /> */}
      <img
        src={Logo}
        alt='SheHired Logo'
        className='mr-4 h-6 ml-2 mt-2 mb-20'
      />

      <div className='flex flex-col items-center'>
        <JobInfo />
        <JobInfo />
        <JobInfo />
      </div>
      <FooterBar />
    </div>
  );
}

export default jobboard;
