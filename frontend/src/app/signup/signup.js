import React from "react";
import Logo from "../logo.svg";
import brandImg from "../images/joel-muniz-HvZDCuRnSaY-unsplash 1.png";

export default function Signup() {
  return (
    <section className="signupLayout">
      <img src={Logo} alt="" className="logo" />
      <img src={brandImg} alt="brand logo" className="signupLogo" />

      <section className="signup-form">
        <h1>CREATE A NEW ACCOUNT</h1>
        ENTER YOUR DETAILS TO REGISTER
        <form action="" className="signup">
          <label htmlFor="name">NAME</label>
          <input id="name" type="text" />
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input id="email" type="email" />
          <label htmlFor="password">PASSWORD</label>
          <input id="password" type="password" />
        </form>
        <section className="userType">
          <input type="radio" name="utype" />
          <label htmlFor="utype">STUDENT</label>
          <input type="radio" name="utype" />
          <label htmlFor="utype">EARLY CAREER</label>
          <button>SIGN UP</button>
          ALREADY HAVE AN ACCOUNT?
          <a href="" className="loginLink">
            LOGIN HERE
          </a>
        </section>
      </section>
    </section>
  );
}
