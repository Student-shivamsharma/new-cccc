

import React, { useEffect } from 'react'
import Subtract from '../EventsImg/Subtract.svg'
import devclash2 from '../EventsImg/devclash2.svg'
import dev from '../EventsImg/dev.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import web from '../images/web.png';
import ui from '../images/ui.png';
import cloud from '../images/cloud.png';
import app from '../images/app.png';
import { motion } from 'framer-motion';
import eventp from '../EventsImg/eventp.svg'
import confetti from 'canvas-confetti';
import Confetti from './ui/confetti';
import Particles from './ui/particles';
import spocc23 from '../EventsImg/spocc23.jpg';
import nimbusp from '../EventsImg/nimbusp.jpg';

export const Espocc = () => {
  useEffect(() => {
    window.scrollTo({
      top : 0,
      behavior : "smooth"
    })
  })

  return (
    <>
    <Particles/>
    <div className = "absolute top-0 left-0 w-full flex justify-center items-center">
     <Confetti   particleCount= {400} spread= {500}></Confetti>
     </div>
    <div className='max-w-[80vw] text-center flex justify-center items-center flex-col m-auto h-auto '>
      <Head/>
      <div className=' block md:flex justify-evenly mt-16 gap-52'>
      <Image1/>
      <Image2/>
      </div>
      <Carousel/>
    </div>
    </>
  )
}

const Head = () => {
  return(
    <div className='text-white text-4xl font-bold underline   mt-6'>
      Event-Spocc
    </div>
  )
}

const Image1 = () => {
  return(
    <div className='flex justify-center items-center'>
       <img src={Subtract} alt=""  className='h-[50vh] ' />
    </div>
  )
}

const Image2 = () => {
  return(
    <div className='flex justify-center items-center'>
       <img src={spocc23} alt=""  className='h-[50vh] mt-8 sm:mt-0 border-2 border-white rounded-lg shadow-lg shadow-white' />
    </div>
  )
}



const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, 
    pauseOnHover: false,
    responsive : [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

 
  const data = [
    { img: eventp },
    { img: eventp },
    { img: eventp},
    { img: eventp},
  ];

  return (
    <div className="max-w-[80vw] m-auto h-auto  mt-28 my-12">
      <Slider {...settings}>
        {data.map((card, index) => (
          <div
            key={index}
            className="flex justify-center items-center max-w-[80vw] m-auto h-full"
            style={{
              overflow: 'hidden',
            }}
          >
            <img
              src={card.img}
              alt={`Slide ${index}`}
              className="lg:w-96 lg:h-96 md:w-80 md:h-80 w-72 h-72 object-cover" 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};


