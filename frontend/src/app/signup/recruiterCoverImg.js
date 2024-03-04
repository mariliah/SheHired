import React from "react";
import brandImg from "../../images/recruiterlogin.jpg";

export default function RecruiterCoverImg() {
  return (
    <img
      src={brandImg}
      className="w-3/4 md:w-1/2 h-auto object-cover"
      alt="a woman working on laptop"
    />
  );
}
