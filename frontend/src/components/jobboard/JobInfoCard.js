import React from 'react';
import CustomAvi from '../common/CustomizableAvatar';
import Company from '../../images/companyavatar2.jpg';

function JobInfoCard() {
  return (
    <div className='flex justify-center '>
      <div className='job-info-card bg-crimson bg-opacity-80 text-cream rounded-10 w-600 h-200 my-4 flex items-center'>
        <CustomAvi
          src={Company}
          height='100px'
          width='100px'
          alt='company avatar'
          avatarCustomClass='mr-4 ml-6 mb-8'
          avatarImage=''
        />
        <div className='mb-4 ml-2'>
          <h3 className='text-lg mb-6 '>UI / UX Designer</h3>
          <p className='text-sm'>Sephora</p>
          <p className='text-sm'>Chicago</p>
          <div className=' mt-4'>
            <div className='mb-2'>
              <div className='border-b-2 border-amber w-full'></div>
            </div>
            <div className='text-sm'>
              <span>2 days ago</span>
              <span className='text-amber'> | </span>
              <span>Full time</span>
              <span className='text-amber'> | </span>
              <span>Salary</span>
              <span className='text-amber'> | </span>
              <span>Deadline</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobInfoCard;
