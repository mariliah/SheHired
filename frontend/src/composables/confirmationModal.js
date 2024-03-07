import React from "react";
import { Link } from 'react-router-dom';
import tick from '../images/Tick-Square.png'

export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            {showModal ? (
                <section className='flex flex-col items-center'>
                <section className='w-2/5 auto bg-cream absolute flex flex-col py-5 items-center top-1/4'>
                <div className='w-44 h-44 my-5 bg-crimson rounded-full'>
                    <img className='relative w-20 m-auto top-1/3' src={tick} alt='tick mark'/>
                </div>
                <h1 className='text-crimson my-1 font-poppins font-bold text-3xl'>Verified!</h1>
                <p className='text-crimson my-1'>You have successfully verified your account</p>
                <button className="bg-crimson my-10 text-frostyMist w-1/2 h-12 rounded-2xl" type="submit">
                <Link to='/loginpage'className="font-bold">
                        LOGIN
                    </Link>
                    </button>
                </section>

            </section>
            ) : null}
        </>
    );
  }