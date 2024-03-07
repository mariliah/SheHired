import React from "react";
import brandImg from "../../images/recruiterlogin.jpg";

export default function RecruiterCoverImg() {
  return (
    <img
      src={brandImg}
      className="w-full h-screen object-cover"
      alt="a woman working on laptop"
    />
  );
}
