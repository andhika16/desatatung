import React from "react";
import { carousel } from "../assets/Link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const [current, setCurrent] = React.useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? carousel.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === carousel.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative max-w-full h-[450px] group">
      <div
        style={{ backgroundImage: `url(${carousel[current].img})` }}
        className="w-full h-full bg-center bg-cover duration-500 relative"
      >
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 className="text-2xl font-semibold">{carousel[current].title}</h2>
          <p className="mt-2 text-lg">{carousel[current].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
