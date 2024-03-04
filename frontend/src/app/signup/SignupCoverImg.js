import React from "react";

export default function SignupCoverImg(){
    
    const brandImg = "../signup.png"; 

    return(
        <img
          src={brandImg}
          className="w-3/4 md:w-1/2 h-auto object-cover"
          alt="biopc women enjoying together"
        />
    )
}
