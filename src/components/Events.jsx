


import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import dev from "../EventsImg/dev.png";
import { IoMdArrowRoundForward } from "react-icons/io";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
// import devclash from '../EventsImg/devclash.png';
import graphicon from '../EventsImg/graphicon.svg';
import hacker from '../EventsImg/hacker.png';
import nimbus from '../EventsImg/nimbus.svg';
import devclash from '../EventsImg/devclash.svg';
import spocc from '../EventsImg/spocc.svg';
import spocc22 from '../EventsImg/spocc22.jpg';
import spocc23 from '../EventsImg/spocc23.jpg';
import buzz from '../EventsImg/buzz.jpg';
import graphiconp from '../EventsImg/graphiconp.jpg';
import hackerrank from '../EventsImg/hackerrank.svg';
import hackerp from '../EventsImg/hackerp.jpg';
import nimbusp from '../EventsImg/nimbusp.jpg';
import { Link } from "react-router-dom";

export const Events = () => {
   useEffect(() => {
      window.scrollTo({
        top : 0,
        behavior : "smooth"
      })
    })
  return (
    <div className="flex justify-center items-center flex-col">
      <EventCarousel />
      <EventImages />
    </div>
  );
};

const EventCarousel = () => {
  return (
    <div className="sm:h-[80vh]  sm:mb-20 mb-3 h-[60vh]  w-screen  flex justify-center relative text-center">
      <div className="container mx-auto h-[47rem]   sm:w-screen w-[350px]  sm:h-[40rem] p-[2rem] relative">
        <motion.h1
          initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
          whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
          className="text-white text-center text-2xl sm:text-5xl mb-20 md:text-6xl font-rubik  font-bold"
        >
          Events
        </motion.h1>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".forward",
            prevEl: ".backward",
            clickable: true,
          }}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
            stopOnHover: true, 
          }}
          breakpoints={{
            700: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 3,
            },
            // slidesPerView : 4
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} 
          className="swiper lg:w-[90%] xl:w-[100%]   relative p-5 h-[30%] sm:h-[80%]"
        >
      
          <SwiperSlide>
            <img
              src={dev}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={spocc22}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={hackerp}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={nimbusp}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={spocc23}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={graphiconp}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg4"
            />
          </SwiperSlide>

          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 z-50 space-x-0">
            <div className="backward text-white text-3xl z-50 transform rotate-180 cursor-pointer">
              <IoMdArrowRoundForward />
            </div>
            <div className="forward text-white text-3xl z-50 cursor-pointer">
              <IoMdArrowRoundForward />
            </div>
          </div>

          <div className="swiper-pagination w-[15rem] mx-auto mt-4 z-50"></div>
        </Swiper>
      </div>
    </div>
  );
};

const EventImages = () => {
  return (
    <div className="text-white text-4xl flex flex-wrap justify-center gap-4 items-center max-w-[90vw] h-auto">
      <motion.div initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 3, type: "spring" }}
        className="flex relative justify-center items-center">
        
          <Link to="/Devclash">
        <img src={devclash} className="sm:w-[35vw] w-[70vw] cursor-pointer sm:m-8 m-4 animate-bounce" alt="" />
        </Link>
      </motion.div>
      <motion.div initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 3, type: "spring" }}
        className="flex relative justify-center items-center">
           <Link to="/Graphicon">
        <img src={graphicon} className="sm:w-[35vw] w-[70vw] cursor-pointer sm:m-8 m-4 animate-bounce" alt="" />
        </Link>
      </motion.div>
      <motion.div initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 3, type: "spring" }}
        className="flex relative justify-center items-center">
          <Link to="/HackerOverflow">
        <img src={hackerrank} className="sm:w-[35vw] w-[70vw] cursor-pointer sm:m-8 m-4 animate-bounce" alt="" />
        </Link>
      </motion.div>
      <motion.div initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 3, type: "spring" }}
        className="flex relative justify-center items-center">
           <Link to="/Nimbus">
        <img src={nimbus} className="sm:w-[35vw] w-[70vw] cursor-pointer sm:m-8 m-4 animate-bounce" alt="" />
        </Link>
      </motion.div>
      <motion.div initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 3, type: "spring" }}
        className="flex relative justify-center items-center">
           <Link to="/Spocc">
        <img src={spocc} className="sm:w-[35vw] w-[70vw] cursor-pointer sm:m-8 m-4 animate-bounce" alt="" />
        </Link>
      </motion.div>
    </div>
  );
};
