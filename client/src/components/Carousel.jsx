import React from "react";
import { carousel } from "../assets/Link";
import { FaArrowLeft, FaArrowRight, FaDotCircle } from "react-icons/fa";

const Carousel = () => {
  const [current, setCurrent] = React.useState(1);

  const prevSlide = () => {
    setCurrent(current === 0 ? carousel.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === carousel.length - 1 ? 0 : current + 1);
  };

  const goToSlide = (slideIndex) => { 
    setCurrent(slideIndex);
  }

  return (
    <div className="">
      <div className=" max-w-full h-[450px]   relative group">
        <div
          style={{ backgroundImage: `url(${carousel[current].img})` }}
          className="w-full h-full  bg-center bg-cover duration-500"
        ></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <FaArrowLeft onClick={prevSlide} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <FaArrowRight onClick={nextSlide} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {carousel.map((slide, slideIndex) => {
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer text-white">
              <FaDotCircle />
            </div>; 
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
