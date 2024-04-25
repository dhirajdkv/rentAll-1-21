import React from "react";
import Logo from "../images/byte.png";
import ContactMe from "./ContactMe";

const Footer = () => {
  return (
    <div className="mt-40 bg-slate-800">
      <div className="flex max-w-5xl p-10 mx-auto justify-between items-center text-white md:flex-row flex-col gap-10 text-center">
        <div className="flex flex-col items-center md:w-full">
          <img className="w-40" src={Logo} alt="rentAll Logo" />
          {/* <h1 className="text-4xl font-bold m-2">rentAll</h1> */}
          <p className="italic text-cyan-500 mt-2 mb-2">
            One stop shop for buying, selling & rentals .
          </p>
          <p>Copyright 2024 &copy; rentAll:</p>
        </div>
        {/* <ContactMe /> */}
      </div>
    </div>
  );
};

export default Footer;
