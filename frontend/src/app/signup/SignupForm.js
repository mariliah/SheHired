import React,{ useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType,setAccountType] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleAccountType = (e) =>{
    setAccountType(e.target.value);
    setSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
        setError(true);
    } else {
        setSubmitted(true);
        setError(false);
    }
};


  const errorMessage = () => {
    return (
        <div
            className="bg-scarlet text-frostyMist"
            style={{
                display: error ? "" : "none",
            }}
        >
            <h1>Please enter all the fields</h1>
        </div>
    );
  };
  

  return (
    <>
      <section className="block absolute w-60 mx-5 text-center right-0">
                {errorMessage()}
      </section>
    <section >

        <section className="w-full md:block py-20 font-poppins mx-12">
          <h1 className="font-bold text-2xl">CREATE A NEW ACCOUNT</h1>
          <p>ENTER YOUR DETAILS TO REGISTER</p>
          <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
            <div className="relative my-2">
            <label htmlFor="name">NAME</label>
            <input
              id="name"
              type="text"
              className="w-full bg-cream rounded-2xl px-2 py-3 border-solid border-2 border-grey focus:bg-white"
              style={{
                border: error && name === "" ? "2px solid red" : "2px solid grey"
              }}
              onChange={handleName}
              value={name}
              required
            />
            <FaRegUser className="absolute top-3/4 transform -translate-y-1/2 left-3 text-gray-500" />
            </div>

            <div className="relative my-2">
            <label htmlFor="email" >EMAIL ADDRESS</label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                className="w-full bg-cream rounded-2xl px-2 py-3 border-solid border-2 border-grey focus:bg-white"
                style={{
                  border: error && email === "" ? "2px solid red" : "2px solid grey"
                }}
                onChange={handleEmail}
                value={email}
                required
              />
            </div>
            <IoMailOutline className="absolute top-3/4 transform -translate-y-1/2 left-3 text-gray-500" />
            </div>

            <div className="relative my-2">
            <label htmlFor="password" >PASSWORD</label>
            <input
              id="password"
              type="password"
              className="w-full bg-cream rounded-2xl px-2 py-3 border-solid border-2 border-grey focus:bg-white"
              style={{
                border: error && password === "" ? "2px solid red" : "2px solid grey"
              }}
              onChange={handlePassword}
              value={password}
              required
            />
            <IoLockClosedOutline className="absolute top-3/4 transform -translate-y-1/2 left-3 text-gray-500" />
            </div>

            <section className="flex items-center justify-center mt-9">
              <input type="radio" name="utype" className="accent-crimson" onChange={handleAccountType} value="student" checked={accountType === "student"} />
              <label htmlFor="utype" className="mx-4">
                STUDENT
              </label>
              <input type="radio" name="utype" className="accent-crimson" onChange={handleAccountType} value="early-career" checked={accountType === "early-career"} />
              <label htmlFor="utype" className="mx-4">
                EARLY CAREER
              </label>
            </section>

            <button className="bg-crimson text-frostyMist w-full h-12 rounded-2xl mt-10" type="submit">
              SIGN UP
            </button>
          </form>
          <p className="text-center mt-10">
            ALREADY HAVE AN ACCOUNT?
            <a href="/" className="font-bold">
              LOGIN HERE
            </a>
          </p>
        </section>
      </section>
    </>
  );
}
