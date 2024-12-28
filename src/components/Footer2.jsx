import React from "react";
import Meteors from "./ui/meteors";
import Orbit2 from "./ui/Orbit2";
import { BorderBeam } from "./BorderBeam";
import ShimmerButton from "./ui/shimmer-button";
import CCC from "../images/CCC.png";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer2 = () => {
  return (
    <div className="sm:h-screen h-[120vh] w-screen bg-black overflow-hidden relative">
      <Meteors/>
      <Orbit2 className=""></Orbit2>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <Meteors/>
        <p className="text-white text-3xl md:text-6xl font-bold">
          Be part of the future of
        </p>
        <p className="text-white text-3xl md:text-6xl font-bold">IdentifyHub</p>
        <p className="text-white mt-4 text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Quam, laboriosam? Lorem ipsum dolor, sit amet consectetur adipisicing.
        </p>
        <div className="text-white text-xl md:text-xl mt-4 font-bold">
          <ShimmerButton>Start Now</ShimmerButton>
        </div>
      </div>

      <div className="flex text-xl text-white text-center font-bold absolute bottom-24 left-24">
        <img src={CCC} className="h-10 mr-4 mb-2" alt="" />
        <p>Cloud Computing Cell</p>
      </div>
      <div className="border-[1px] border-gray-800 w-full absolute bottom-24"></div>

      <div className="icons text-white sm:text-5xl text-3xl gap-10 mt-2 absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-evenly items-center">
        <FaFacebook />
        <FaLinkedin />
        <FaSquareInstagram />
        <FaSquareTwitter />
        <IoLogoYoutube />
      </div>

      <div className="nav absolute sm:bottom-24  bottom-14 right-14 sm:right-24">
        <ul className="text-white sm:text-xl text-center text-xs flex justify-evenly items-center gap-4 mb-4 font-bold">
          <li>Home</li>
          <li>Events</li>
          <li>Team</li>
          <li>Register</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="text-white mt-9 sm:mt-4 absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center text-sm md:text-lg py-4">
        <p>
          Crafted with passion by Team -
          <span className="mx-2 font-extrabold text-indigo-800">
            Cloud Computing
          </span>
        </p>
        <p>cccAkgec.ac.in</p>
      </div>
    </div>
  );
};

export default Footer2;