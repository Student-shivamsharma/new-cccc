import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../images/logo.svg";
import CCC from "../images/CCC.png";
import { FiChevronDown } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmojiEvents } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="z-50 ">
      <Sidebar />
      <ResNavbar />
      <Social />
      <Gototop/>
    </div>
  );
};

const Sidebar = () => {
  const handle = () => {
    setOpen(true);
  };

  const handles = () => {
    setOpen(false);
  };

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Home");
  const [scrollWidth , setScrollWidth] = useState(0)

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.nav
      layout
      onHoverStart={handle}
      onHoverEnd={handles}
      className={`z-50 fixed  top-0 h-[100vh] hidden cursor-pointer sm:block  border shrink-0 border-violet-800 bg-zinc-800 p-3`}
      style={{ width: open ? "235px" : "fit-content" }}
    >
      <TitleSection open={open} />
      <div className="space-y-1">
        <Option
          to="/"
          Icon={FaHome}
          title="Home"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          to="/Team"
          Icon={FaPeopleGroup}
          title="Team"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          to="/Events"
          Icon={MdEmojiEvents}
          title="Events"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          to="/Contact"
          Icon={FaPhoneVolume}
          title="Contact"
          selected={selected}
          setSelected={setSelected}
          open={open}
          notifs="1"
        />
        <Option
          to="/Register"
          Icon={GiAchievement}
          title="Register"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
      
      <div
        className={`fixed   top-0 w-1 h-1 ${open ? "left-[235px]" : "left-[70px]"} bg-violet-600 rounded-r-2xl`}
        style={{ height: `${scrollWidth}%` }}
      ></div>
    
    </motion.nav>
  );
};

const Option = ({ to, Icon, title, selected, setSelected, open, notifs }) => {
  return (
    <>
      {/* <a href={to}> */}
      <Link to={to}>
        <motion.button
          layout
          onClick={() => setSelected(title)}
          className={` z-50 relative flex h-16 w-full items-center rounded-md  transition-colors 
          ${
            selected === title
              ? "text-white hover:bg-white hover:text-black"
              : "hover:text-black text-white hover:bg-white"
          }
        `}
        >
          <motion.div
            layout
            className="grid h-full text-3xl  w-10 place-content-center "
          >
            <Icon />
          </motion.div>
          {open && (
            <motion.span
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              className="text-lg ml-2 font-semibold font-rubik"
            >
              {/* <Link to={to}>{title}</Link>  */}
              {title}
            </motion.span>
          )}
          {notifs && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              style={{ transform: "translateY(-50%)" }}
              className="absolute right-2  size-4 ronded bg-indigo-500 text-xs animate-bounce font-bold  text-white top-7"
            >
              {notifs}
            </motion.span>
          )}
          {/* {notifs && open && (
        <motion.span initial ={{scale : 0 , opacity : 0}} animate={{opacity : 1 , scale : 1}} transition={{delay : 0.5}} style={{transform : "translateY(-50%)"}} className='absolute right-2  size-4 ronded bg-indigo-500 text-xs text-white top-7'>
          {notifs}
        </motion.span>
      )} */}
        </motion.button>
        {/* <Link/> */}

        {/* </a> */}
      </Link>
    </>
  );
};

const TitleSection = ({ open }) => {
  return (
    <div className=" z-50 mb-3 border-b border-violet-600 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors ">
        {/* <Logo/> */}
        <div className="flex items-center gap-2">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              className="text-white"
            >
              <span className="block text-xs font-bold ">
                Cloud Computing Cell
              </span>
              <span className="block text-xs text-slate-600 font-bold">
                Think Develop Deploy
              </span>
            </motion.div>
          )}
        </div>
        {/* {open && (
          <FiChevronDown className="text-white mr-2 text-xl font-bold" />
        )} */}
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <>
      <motion.div layout>
        <img
          src={CCC}
          className={`h-12 z-50 ${open ? "animate-slideo" : ""}`}
          alt=""
        />
      </motion.div>
    </>
  );
};

const ToggleClose = ({ open, setOpen }) => {
  const [scrollWidth , setScrollWidth] = useState(0)
  const scrollTop = window.scrollY;

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const  top = () => {
  window.scrollTo({
    top : 0,
    behavior : "smooth"
  })
  }
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="text-white absolute bottom-0 left-0 right-0 border-t border-violet-600 transition-colors"
    >
      <div className="flex items-center p-2">
        <div className="grid size-10 place-center text-lg">
          <FaAnglesLeft onClick={top}
            className={` font-bold text-xl transition-transform  transition-smooth mt-1 ${
              open && "rotate-180"
            }`}
          />
        </div>
       
        {/* {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-lg font-bold  text-white"
          >
        
          </motion.span>
        )} */}
      </div>
    </motion.button>
  );
};


function Gototop(){
  const [scrollWidth , setScrollWidth] = useState(0)
  const scrollTop = window.scrollY;

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const  top = () => {
  window.scrollTo({
    top : 0,
    behavior : "smooth"
  })
  }

  return(
    <div onClick={top} className=" text-xl z-50 cursor-pointer   h-12 flex justify-center  items-center w-12  hover:scale-110 transition-all ease-in-out duration-1000 delay-0 rounded-full bg-slate-50 shadow-md hover:shadow-white text-black font-extrabold fixed sm:right-[80px] bottom-20 right-5 sm:bottom-5">
    <FaAnglesLeft 
        className={` font-bold text-xl transition duration-1000  ease-in-out ${
          // scrollTop && "rotate-180"
          scrollTop ? "rotate-90" : "-rotate-90"
        }`}
        />
    </div>
  )
}

// const ExampleContent = () => <div className='h-[100vh] bg-red-800 w-full'></div>

const ResNavbar = () => {
  const [scrollWidth , setScrollWidth] = useState(0)

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="block sm:hidden fixed left-0 w-full  bottom-0 right-0 z-50 border-t-2 border-violet-800">
      <div className="icons flex text-white bg-black h-16 justify-evenly items-center text-3xl">
        {/* <motion.div
          initial={{ x: -80, rotate: 360 }}
          whileInView={{ x: 0, rotate: 0 }}
          transition={{ duration: 3 }}
        > */}
        <img src={CCC} className="h-10" alt="" />
        {/* </motion.div> */}
        <div className="border-r border-violet-600 h-full pb-3 mt-3 mb-3"></div>
        {/* <div className='border-white border-2 m-1 h-full'></div> */}
        <Link to="/">
          <FaHome className="hover:scale-110" />
        </Link>
        <Link to="/Team">
          <FaPeopleGroup />
        </Link>
        <Link to="/Events">
          <MdEmojiEvents />
        </Link>
        <Link to="/Contact">
          <FaPhoneVolume />
        </Link>
        <Link to="/Register">
          <GiAchievement />
        </Link>
      </div>
      <div
        className={`fixed   bottom-16 w-1 h-1 left-0 bg-violet-600 rounded-r-2xl`}
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
    
    // <div></div>
  );
};

const Social = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [scrollWidth , setScrollWidth] = useState(0)

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white hidden  fixed w-16 h-[100vh] border-l-2 border-violet-700 mt-0 right-0 top-0 sm:flex justify-center items-center flex-col gap-10 text-4xl cursor-pointer z-50">
    
    <div
        className="fixed  right-[63px] top-0 h-1 w-1 bg-violet-600 rounded-r-2xl"
        style={{ height: `${scrollWidth}%` }}
      ></div>

      <div>
        <div className="flex justify-center items-center text-white flex-col gap-12">
          <a
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative top hover:text-blue-700  hover:scale-110 transition-all ease-in-out duration-1000 z-50 cursor-pointer delay-0"
            href=""
          >
            <FaFacebook />
            <div
              className={`h-9 rounded-md w-24 absolute top-2  ${
                isHovered ? "opacity-100" : "opacity-0"
              } transition-all ease-in-out duration-1000  right-16 border-2 border-violet-500  text-sm flex justify-center items-center font-jetbrains font-bold`}
            >
              Facebook
            </div>
          </a>
          <a
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            className="relative top  hover:text-blue-900 hover:scale-110 transition-all ease-in-out duration-1000 z-50 cursor-pointer delay-0"
            href=""
          >
            <FaLinkedin />
            <div
              className={`h-9 rounded-md w-24 absolute top-2  ${
                isHovered2 ? "opacity-100" : "opacity-0"
              } transition-all ease-in-out duration-1000  right-16 border-2 border-violet-500  text-sm flex justify-center items-center font-jetbrains font-bold`}
            >
              Linkedin
            </div>
          </a>
          <a
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
            className="relative top  hover:text-orange-700  hover:scale-110 transition-all ease-in-out duration-1000 z-50 cursor-pointer delay-0"
            href=""
          >
            <FaSquareInstagram />
            <div
              className={`h-9 rounded-md w-24 absolute top-2  ${
                isHovered3 ? "opacity-100" : "opacity-0"
              } transition-all ease-in-out duration-1000  right-16 border-2 border-violet-500  text-sm flex justify-center items-center font-jetbrains font-bold`}
            >
              Instagram
            </div>
          </a>
          <a
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
            className="relative top    hover:scale-110 transition-all ease-in-out duration-1000 z-50 cursor-pointer delay-0"
            href=""
          >
            <FaSquareXTwitter />
            <div
              className={`h-9 rounded-md w-24 absolute top-2  ${
                isHovered4 ? "opacity-100" : "opacity-0"
              } transition-all ease-in-out duration-1000  right-16 border-2 border-violet-500  text-sm flex justify-center items-center font-jetbrains font-bold`}
            >
              Twitter
            </div>
          </a>
          <a
            onMouseEnter={() => setIsHovered5(true)}
            onMouseLeave={() => setIsHovered5(false)}
            className="relative top hover:text-red-700 hover:scale-110 transition-all ease-in-out duration-1000 z-50 cursor-pointer delay-0"
            href=""
          >
            <IoLogoYoutube />
            <div
              className={`h-9 rounded-md w-24 absolute top-2  ${
                isHovered5 ? "opacity-100" : "opacity-0"
              } transition-all ease-in-out duration-1000  right-16 border-2 border-violet-500 0 text-sm flex justify-center items-center font-jetbrains font-bold`}
            >
              Youtube
            </div>
          </a>
         
        </div>
      </div>
    </div>
  );
};
