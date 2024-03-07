import React from "react";
import RecruiterCoverImg from "../app/signup/recruiterCoverImg";
import RecruiterSignupForm from "../app/signup/recruiterSignupForm";

export default function Signup(){
    //const logo = "../logo.png";
    

    return(
        <section>
           {/* <img
            src={logo}
            alt="logo of shehired"
            className="w-1/4 absolute right-0"
    />*/}
            <section className="bg-cream font-poppins h-screen flex items-center justify-center">
            <section className='flex-1'>
                <RecruiterCoverImg />
            </section>
                <section className='flex-1 flex justify-center items-center'>
                <RecruiterSignupForm />
                </section>
            </section>
        </section>
    )
}
