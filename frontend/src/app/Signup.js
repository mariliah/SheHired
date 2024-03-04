import React from "react";
import SignupCoverImg from "./signup/SignupCoverImg";
import SignupForm from "./signup/SignupForm";

export default function Signup(){
    const logo = "../logo.png";
    

    return(
        <>
            <img
            src={logo}
            alt="logo of shehired"
            className="w-1/4 absolute right-0"
            />
            <section className="w-auto h-auto flex bg-cream font-poppins">
                <SignupCoverImg />
                <SignupForm />
            </section>
        </>
    )
}
