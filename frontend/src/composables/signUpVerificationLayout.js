import React from "react";
import emailIcon from '../images/Mail.png';

export default function SignupVerification(props){
    return(
        <section className="flex flex-col items-center text-center mx-12">
            <img className="w-24 h-24" src={emailIcon} alt="mail icon" />
            <h1 className="text-crimson font-bold font-poppins text-3xl">Verify your email</h1>
            <p className="text-xl font-poppins">
                We sent a verification link to <span className="font-bold">{props.userEmail}</span>.
                Click the link in the email to verify your account.
            </p>
            <button className="bg-crimson text-frostyMist w-full h-12 rounded-2xl mt-10" type="submit">
              RESEND EMAIL
            </button>
        </section>
    )
}