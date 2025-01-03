import React, { act, useState } from "react";
import shivamsharma from "../3yearImg/shivamsharma.jpg";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import imgfooter from "../images/imgfooter.png";
import rec1 from "../images/rec1.png";
import rec2 from "../images/rec2.png";
import rec3 from "../images/rec3.png";
import Raghav from "../images/Raghav.jpg";
import ShimmerButton from "./ui/shimmer-button";
import cardbg1 from "../images/cardbg1.svg";
import card2bg from "../images/card2bg.svg";
import card3bg from "../images/card3bg.svg";
import adityaKumar from "../3yearImg/adityaKumar.jpeg";
import harshSingh from "../3yearImg/harshSingh.jpeg";
import kratikaGupta from "../3yearImg/kratikaGupta.jpg";
import akhandSingh from "../3yearImg/akhandSingh.jpg";
import akshatSingh from "../3yearImg/akshatSingh.jpg";
import arpitaAsthana from "../3yearImg/arpitaAsthana.jpg";
import sachendraGangwar from "../3yearImg/sachendraGangwar.jpg";
import sahil from "../3yearImg/sahil.jpg";
import yashMishra from "../3yearImg/yashMishra.jpg";
import prakharSrivastava from "../3yearImg/prakharSrivastava.jpg";
import manoj from "../3yearImg/manoj.jpg";
import kritika from "../3yearImg/kritika.jpg";
import shreeyaAggarwal from "../3yearImg/shreeyaAggarwal.jpg";
import shreyaMohan from "../3yearImg/shreyaMohan.jpg";
import Diya from "../3yearImg/Diya.jpg";

// import { use } from "react";
// export const TeamCards = () => {

//   const [four , setfour] = useState(false)
//   return (
//     <div className="max-w-[90vw] m-auto">
//       <motion.h1
//         initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
//         whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
//         transition={{ duration: 1.5, delay: 0.5 }}
//         viewport={{once : true}}
//         className="text-white text-center text-xl sm:text-3xl  md:text-4xl underline font-bold  mb-6 mt-6"
//       >
//         OUR TEAM MEMBERS
//       </motion.h1>
//       <Buttons four={four} setfour={setfour}/>
//       {four && <FouthYear/>}
//       {/* <FouthYear />
//       <ThirdYear />
//       <SecondYear /> */}
//     </div>
//   );
// };

// const Buttons = ({four , setfour}) => {
//   return(
//     <div className="max-w-[90vw] m-auto flex justify-evenly">
//     <ShimmerButton onClick={setfour(true)}>4th Year</ShimmerButton>
//     {/* <ShimmerButton onClick={three}>3rd Year</ShimmerButton>
//      <ShimmerButton onlLick={four}>2nd Year</ShimmerButton> */}

//     </div>
//   )
// }

export const TeamCards = () => {
  const [activeYear, setActiveYear] = useState("four");

  const handleYearSelect = (year) => {
    setActiveYear(year);
  };

  return (
    <div className="max-w-[90vw] m-auto">
      <motion.h1
        initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
        whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-white text-center text-xl sm:text-3xl md:text-4xl underline font-bold mb-6 mt-6"
      >
        OUR TEAM MEMBERS
      </motion.h1>
      <Buttons activeYear={activeYear} onSelectYear={handleYearSelect} />
      {activeYear === "four" && <FouthYear />}
      {activeYear === "three" && <ThirdYear />}
      {activeYear === "two" && <SecondYear />}
    </div>
  );
};

const Buttons = ({ onSelectYear, activeYear }) => {

  
  return (
    <div className="flex justify-evenly">
      <div className="max-w-[90vw] sm:mt-10 mt-5 text-xs sm:text-lg m-auto block sm:flex justify-evenly mb-6">
        <ShimmerButton
         shimmerColor = {'#6E45AC'}
          className={` sm:mt-0 ${
            activeYear === "four" ? "scale-110  text-[#6E45AC] font-extrabold" : ""
          }  mr-0 sm:mr-16 transition-all ease-in-out duration-300`}
          onClick={() => onSelectYear("four")}
        >
          4th Year
        </ShimmerButton>
        <ShimmerButton
        shimmerColor = {'#66E0CE'}
          className={`mt-5 sm:mt-0  mr-0 sm:mr-16" ${
            activeYear === "three" ? "scale-110 text-[#66E0CE] font-extrabold" : ""
          }  mr-0 sm:mr-16`}
          onClick={() => onSelectYear("three")}
        >
          3rd Year
        </ShimmerButton>
        <ShimmerButton
        shimmerColor={'#FFC080'}
          className={`mt-5 sm:mt-0  ${
            activeYear === "two" ? "scale-110 text-amber-500 font-extrabold" : ""
          }  mr-0 sm:mr-16`}
          onClick={() => onSelectYear("two")}
        >
          2nd Year
        </ShimmerButton>
      </div>
    </div>
  );
};

const FouthYear = () => {
  const obj = [
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
  ];

  return (
    <div className="h-auto sm:max-w-[90vw] w-full flex justify-center flex-col  items-center py-8">
      <h1 className="mb-10 text-2xl font-serif font-extrabold underline text-[#6E45AC]">
        Fourth Year
      </h1>

      <div className="grid container sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {obj.map((details, index) => (
          <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            key={index}
            className="flex justify-center items-center"
          >
            <div className="relative w-[20rem] cursor-pointer h-[25rem] overflow-hidden border-2 border-[#6E45AC] bg-white rounded-3xl hover:rounded-none group">
              {/* Team member image */}
              <div className="w-full img h-full flex justify-center items-center flex-col transform group-hover:translate-x-full   transition-all damber-500">
                <img
                  src={details.img}
                  alt={details.name}
                  className="h-[13rem] w-[13rem] rounded-full border-2 border-[#6E45AC] shadow-2xl shadow-[#6E45AC]"
                />
                <div className="mt-6 text-center">
                  <p className="text-xl text-black">{details.domain}</p>
                  <p className="text-2xl font-bold text-black">
                    {details.name}
                  </p>
                  <img
                    src={card2bg}
                    className="w-full absolute bottom-0 left-0"
                    alt=""
                  />
                  {/* <img src={rec1} className="w-full absolute bottom-0 left-0" alt="" /> */}
                </div>
              </div>

              {/* team member about */}
              <div className="absolute content top-0 left-0 w-full h-full bg-[#6E45AC] flex justify-center items-center text-red-400 transition-all duration-700 ease-in-out transform group-hover:translate-x-0  -translate-x-full flex-col">
                <div className="tags text-5xl p-3  flex gap-3 text-black">
                  <a href="">
                    <FaLinkedin />
                  </a>
                  <a href="">
                    <FaSquareGithub />
                  </a>
                  <a href="">
                    <FaSquareInstagram />
                  </a>
                </div>
                <p className="mb-4 text-black font-mono p-5 text-center">
                  {details.about}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ThirdYear = () => {
  const obj = [
    {
      img: sachendraGangwar,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: yashMishra,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: harshSingh,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: adityaKumar,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: sahil,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: manoj,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: akhandSingh,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: prakharSrivastava,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: akshatSingh,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: kritika,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Diya,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: kratikaGupta,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: shreyaMohan,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },

    {
      img: arpitaAsthana,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: shreeyaAggarwal,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
  ];
  return (
    <div className="h-auto sm:max-w-[90vw] w-full flex justify-center flex-col  items-center py-8">
      {/* Section Heading */}

      <h1 className="mb-10 mt-10 text-2xl font-serif font-extrabold underline text-[#66E0CE]">
        Third Year
      </h1>
      {/* Team Card Grid */}
      <div className="grid container sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {obj.map((details, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            key={index}
            className="flex justify-center items-center"
          >
            <div className="relative w-[20rem]  cursor-pointer h-[25rem] overflow-hidden border-2 border-[#66E0CE] bg-white rounded-2xl group">
              {/* Team Member Image */}
              <div className="w-full img h-full flex justify-center items-center flex-col transition-all ">
                <img
                  src={details.img}
                  alt={details.name}
                  className="h-[13rem] w-[13rem] rounded-full border-2 border-[#66E0CE] shadow-2xl shadow-[#66E0CE]"
                />
                <div className="mt-6 text-center">
                  <p className="text-xl text-black">{details.domain}</p>
                  <p className="text-2xl font-bold text-black">
                    {details.name}
                  </p>
                  <img
                    src={card3bg}
                    className="w-full absolute bottom-0 left-0"
                    alt=""
                  />
                </div>
              </div>

              {/* Hover Content */}
              <div className="absolute content top-0 left-0 w-full h-full border-[#66E0CE] bg-[#66E0CE] flex justify-center items-center text-red-400 transition-all duration-700 ease-in-out transform group-hover:translate-x-0  -translate-x-full flex-col">
                <div className="tags text-5xl p-3  flex gap-3 text-black">
                  <a href="">
                    <FaLinkedin />
                  </a>
                  <a href="">
                    <FaSquareGithub />
                  </a>
                  <a href="">
                    <FaSquareInstagram />
                  </a>
                </div>
                <p className="mb-4 text-black font-mono p-5 text-center">
                  {details.about}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const SecondYear = () => {
  const obj = [
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
  ];

  return (
    <div className="h-auto sm:max-w-[90vw] w-full flex justify-center flex-col  items-center py-8">
      {/* Section Heading */}

      <h1 className="mb-10 mt-10 text-2xl font-serif font-extrabold underline text-amber-500">
        Second Year
      </h1>
      {/* Team Card Grid */}
      <div className="grid container sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {obj.map((details, index) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(30px)", x: -20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            key={index}
            className="flex justify-center items-center"
          >
            <div className="relative w-[20rem]  cursor-pointer h-[25rem] overflow-hidden border-2 border-amber-500 bg-white rounded-2xl group">
              <div className="w-full img h-full flex justify-center items-center flex-col transition-all damber-500">
                <img
                  src={details.img}
                  alt={details.name}
                  className="h-[13rem] w-[13rem] rounded-full border-2 border-amber-500 shadow-2xl shadow-amber-500"
                />
                <div className="mt-6 text-center">
                  <p className="text-xl text-black">{details.domain}</p>
                  <p className="text-2xl font-bold text-black">
                    {details.name}
                  </p>
                  <img
                    src={cardbg1}
                    className="w-full absolute bottom-0 left-0"
                    alt=""
                  />
                </div>
              </div>

              <div className="absolute content top-0 left-0 w-full h-full bg-amber-500 flex justify-center items-center text-red-400 transition-all duration-700 ease-in-out transform group-hover:translate-y-0  translate-y-full flex-col">
                <div className="tags text-5xl p-3  flex gap-3 text-black">
                  <a href="">
                    <FaLinkedin />
                  </a>
                  <a href="">
                    <FaSquareGithub />
                  </a>
                  <a href="">
                    <FaSquareInstagram />
                  </a>
                </div>
                <p className="mb-4 text-black font-mono p-5 text-center">
                  {details.about}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
