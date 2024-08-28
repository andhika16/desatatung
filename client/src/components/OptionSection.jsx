import React from "react";
import developoing from "../assets/developing.png";
import dollar from "../assets/dollar.png";
import barchat from "../assets/bar-chart.png";
import clipboard from "../assets/clipboard.png";
import { Link } from "react-router-dom";

const OptionSection = () => {
  return (
    <div className="bg-slate-900">
      <div className="container mx-auto grid grid-cols-2 sm:flex sm:flex-row justify-around">
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
            className="w-auto py-5 flex flex-col items-center "
          >
            <img
              src={item.image}
              className="w-10 h-10 sm:w-12 sm:h-12"
              alt={item.title}
            />
            <p className="text-center text-slate-300 font-bold font-openSans text-sm sm:text-base mt-4">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OptionSection;
