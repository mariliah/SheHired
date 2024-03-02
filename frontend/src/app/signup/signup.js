import React from "react";
import Logo from "../../logo.svg";
import brandImg from "../../images/joel-muniz-HvZDCuRnSaY-unsplash 1.png";

export default function Signup() {
  return (
    <section>
      <img src={Logo} alt="" className="reg-logo" />
      <section className="signupBody">
        <img src={brandImg} alt="brand logo" className="signupLogo" />

        <section className="md:block">
          <h1>CREATE A NEW ACCOUNT</h1>
          ENTER YOUR DETAILS TO REGISTER
          <form action="">
            <label htmlFor="name">NAME</label>
            <input id="name" type="text" />
            <label htmlFor="email">EMAIL ADDRESS</label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
              />
            </div>
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
            <a href="www.example.com" className="loginLink">
              LOGIN HERE
            </a>
          </section>
        </section>
      </section>
    </section>
  );
}
