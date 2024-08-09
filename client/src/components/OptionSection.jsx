import React from "react";
import developoing from "../assets/developing.png";
import dollar from "../assets/dollar.png";
import barchat from "../assets/bar-chart.png";
import clipboard from "../assets/clipboard.png";
import { Link } from "react-router-dom";

const OptionSection = () => {
  return (
    <div className="bg-slate-100 py-5">
      <div className="container mx-auto flex flex-wrap justify-center gap-6">
        {[
          {
            title: "Informasi",
            image: clipboard,
            link: "/berita",
          },
          {
            title: "Potensi Desa",
            image: developoing,
            link: "/pertanian",
          },
          {
            title: "Keuangan",
            image: dollar,
            link: "#",
          },
          {
            title: "Pembangunan Desa",
            image: barchat,
            link: "#",
          },
        ].map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="w-[40vw] sm:w-[25vw] md:w-[20vw] lg:w-[15vw]  p-5 flex flex-col items-center border-2 border-slate-900"
          >
            <img
              src={item.image}
              className="w-16 h-16 sm:w-20 sm:h-20"
              alt={item.title}
            />
            <p className="text-center text-slate-500   font-inter text-sm sm:text-base mt-4">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OptionSection;
