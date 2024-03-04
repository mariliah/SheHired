import React from "react";

export default function RecruiterCoverImg(){
    
    const brandImg = "../images/recruiterlogin.jpg"; 

    return(
        <img
          src={brandImg}
          className="w-3/4 md:w-1/2 h-auto object-cover"
          alt="a woman working on laptop"
        />
    )
}
