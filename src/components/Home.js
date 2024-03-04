import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const logo = "../logo.png";
  return (
    <section className="w-full h-screen bg-cream font-poppins">
      <header>
        <nav className="flex justify-between items-center relative top-12">
          <img
            className="absolute left-0"
            src={logo}
            alt="shehired brand logo"
          />
          <ul className="w-3/20 flex justify-evenly items-center px-4 py-0 absolute right-16">
            <li className="mx-6">
              <button className="w-24 h-11 rounded-3xl text-crimson bg-cream font-bold hover:bg-crimson hover:text-frostyMist">
                <Link to="/Signup">Sign Up</Link>
              </button>
            </li>
            <li className="mx-6">
              <button className="w-24 h-11 rounded-3xl  text-frostyMist font-bold bg-crimson hover:bg-crimson hover:text-frostyMist">
                Sign In
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <section className="w-full h-auto text-center relative top-44">
        <h1 className="text-5xl font-bold text-slate">
          Where Women Thrive Professionally
        </h1>
        <p className="font-montserrat text-2xl mt-4 text-slate">
          Access Diversity Equity Transparency: Your Inclusive Path Starts Here
        </p>
        <section className="flex justify-evenly items-center w-1/2 mx-auto relative top-28">
          <button className="w-56 h-16 rounded-lg text-2xl text-crimson border-2 border-solid border-crimson hover:bg-crimson hover:text-frostyMist">
            Hire
          </button>
          <button className="w-56 h-16 rounded-lg text-2xl text-frostyMist border-2 border-solid border-crimson bg-crimson hover:bg-crimson hover:text-frostyMist">
            Work
          </button>
        </section>
      </section>
    </section>
  );
}
