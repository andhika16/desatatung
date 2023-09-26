import React from "react";
import { carousel } from "../assets/Link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {

  const [current, setCurrent] = React.useState(1);

  const prevSlide = () => {
    setCurrent(current === 0 ? carousel.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === carousel.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="">
      <div className="max-w-full h-[700px] w-full m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${carousel[current].img})` }}
          className="w-full h-full  bg-center bg-cover duration-500"
        ></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <FaArrowLeft onClick={prevSlide} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <FaArrowRight onClick={nextSlide}/>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
