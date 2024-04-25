import React from "react";
import { Link } from "react-router-dom";
import ContactMe from "../layout/ContactMe";

const AboutMe = () => {
  return (
    <div className=" bg-slate-900 fixed top-0 z-10 text-white flex flex-col items-center gap-20 inset-0 text-center p-20">
      <div>
        <p className="text-white font-bold ">Developers of rentAll Project</p>
        <Link className="text-cyan-500 " to="https://github.com/dhirajdkv/">
          Visit my portfolio
        </Link>
      </div>
      {/* <div>
        <p className="text-cyan-500 font-bold text-xl mb-5">Follow Me</p>
        <ContactMe />
      </div> */}
    </div>
  );
};

export default AboutMe;
