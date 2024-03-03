import React from "react";

export default function Signup() {
  const logo = "../logo.png";
  const brandImg = "../signup.png";

  return (
    <section className="w-auto h-screen block bg-cream font-poppins">
      {/*need improvision to adjust logo /*}
      
      {/* <img
        src={logo}
        alt="logo of shehired"
        className="w-1/4  md:w-1/6 absolute top-0 right-0"
  /> */}
      <section className="flex justify-around items-start">
        <img
          src={brandImg}
          className="w-3/4 md:w-1/2 h-screen object-cover"
          alt="biopc women enjoying together"
        />

        <section className="w-1/2 md:block py-20 font-poppins mx-12">
          <h1 className="font-bold text-2xl">CREATE A NEW ACCOUNT</h1>
          <p>ENTER YOUR DETAILS TO REGISTER</p>
          <form className="flex flex-col mt-10" action="">
            <label htmlFor="name">NAME</label>
            <input
              id="name"
              type="text"
              className="w-full bg-cream rounded-2xl px-2 py-3 border-solid border-2 border-grey focus:bg-white"
              required
            />
            <label htmlFor="email">EMAIL ADDRESS</label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                className="w-full bg-cream rounded-2xl px-2 py-3 border-solid border-2 border-grey focus:bg-white"
                required
              />
            </div>
            <label htmlFor="password">PASSWORD</label>
            <input
              id="password"
              type="password"
              className="w-full bg-cream rounded-2xl px-2 py-3 border-solid border-2 border-grey focus:bg-white"
              required
            />

            <section className="flex items-center justify-center mt-9">
              <input type="radio" name="utype" className="accent-crimson" />
              <label htmlFor="utype" className="mx-4">
                STUDENT
              </label>
              <input type="radio" name="utype" className="accent-crimson" />
              <label htmlFor="utype" className="mx-4">
                EARLY CAREER
              </label>
            </section>

            <button className="bg-crimson text-frostyMist w-full h-12 rounded-2xl mt-10">
              SIGN UP
            </button>
          </form>
          <p className="text-center mt-10">
            ALREADY HAVE AN ACCOUNT?
            <a href="www.example.com" className="font-bold">
              LOGIN HERE
            </a>
          </p>
        </section>
      </section>
    </section>
  );
}
