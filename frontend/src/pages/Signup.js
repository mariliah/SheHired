import React from "react";
import SignupCoverImg from "../app/signup/SignupCoverImg";
import SignupForm from "../app/signup/SignupForm";

export default function Signup(){
    //const logo = "../logo.png";
    

    return(
        <section>
            {/*<img
            src={logo}
            alt="logo of shehired"
            className="w-1/4 absolute right-0"
    />*/}
            <section className="bg-cream font-poppins h-screen flex items-center justify-center">
                <section className='flex-1'>
                    <SignupCoverImg />
                </section>
                <section className='flex-1 flex justify-center items-center'>
                    <SignupForm />
                </section>
            </section>
        </section>
    )
}
