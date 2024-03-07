<<<<<<< HEAD
import React from "react";
import Logo from "../logo.svg";

export default function Home() {
  return (
    <section className="homepage">
      <header>
        <nav className="navbar">
          <img src={Logo} alt="brand logo" className="navbarLogo" />
          <ul className="navList">
            <li className="navItem">
              <button className="navButton">Sign Up</button>
            </li>
            <li className="navItem">
              <button className="navButton active">Sign In</button>
            </li>
          </ul>
        </nav>
      </header>

      <section className="heroSection">
        <h1 className="heroHeading">Where Women Thrive Professionally</h1>
        <p className="heroTagline">
          Access Diversity Equity Transparency: Your Inclusive Path Starts Here
        </p>
        <section className="purposeButtons">
          <button className="purposeButton">Hire</button>
          <button className="purposeButton active">Work</button>
        </section>
      </section>
    </section>
  );
}
=======
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const logo = '../logo.png';
  return (
    <section className="w-full h-screen bg-cream bg-cover bg-hero font-poppins">
      <div className="w-full h-screen backdrop-brightness-90">
      <header>
        <nav className='flex justify-between items-center relative top-12'>
          <img
            className='absolute left-0'
            src={logo}
            alt='shehired brand logo'
          />
          <ul className='w-3/20 flex justify-evenly items-center px-4 py-0 absolute right-16'>
            <li className='mx-6'>
              <button className='w-24 h-11 rounded-3xl text-crimson bg-cream font-bold hover:bg-crimson hover:text-frostyMist'>
                <Link to='/Signup'>Sign Up</Link>
              </button>
            </li>
            <li className='mx-6'>
              <button className='w-24 h-11 rounded-3xl  text-frostyMist font-bold bg-crimson hover:bg-crimson hover:text-frostyMist'>
                <Link to='/loginpage'>Log In</Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <section className='w-full h-auto text-center relative top-44'>
        <h1 className='text-5xl font-bold text-crimson drop-shadow-lg'>
          Where Women Thrive Professionally
        </h1>
        <p className='font-montserrat drop-shadow-[0_35px_35px_rgba(0, 0, 0, 0)] font-bold text-2xl mt-4 text-slate'>
         Your Inclusive Path Starts Here
        </p>
        <section className='flex justify-evenly items-center w-1/2 mx-auto relative top-28'>
          <button className='w-56 h-16 drop-shadow-lg rounded-lg text-2xl text-crimson font-bold border-2 border-solid border-crimson hover:bg-crimson hover:text-frostyMist'>
            <Link to='/recruiter_signup'> Hire </Link>
          </button>
          <button className='w-56 h-16 rounded-lg text-2xl text-frostyMist border-2 border-solid border-crimson bg-crimson hover:bg-crimson hover:text-frostyMist'>
            <Link to='/Signup'> Work </Link>
          </button>
        </section>
      </section>
      </div>
    </section>
  );
}
>>>>>>> 2a3d0bd4dadd8d5d8ce09610f39f6f09d1843fa6
