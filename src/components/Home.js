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
              <button className="navButton">Sign In</button>
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
          <button className="purposeButton">Work</button>
        </section>
      </section>
    </section>
  );
}
