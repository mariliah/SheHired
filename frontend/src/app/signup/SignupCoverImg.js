import React from "react";

export default function SignupCoverImg(){
    
    const brandImg = "../signup.png"; 

    return(
        <img
          src={brandImg}
          className="w-full h-screen object-cover"
          alt="biopc women enjoying together"
        />
    )
}
