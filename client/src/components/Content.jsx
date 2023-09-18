import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";

function Pagination(props) {
  
  const {data} = props
  console.log(data);

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {currentItems.map((news, index) => (
          <div
            className="flex flex-col sm:max-w-6xl p-4 my-2 sm:m-2 bg-slate-400"
            key={index}
          >
            <div className="items-center bg-red  sm:h-[20vw] bg-cover overflow-hidden">
              <img
                className="w-full h-[90%] object-cover"
                src={news.image.url}
                alt={news.image.id}
              />
            </div>
            <div className=" w-auto ">
              <p className="font-roboto sm:my-0 font-semibold sm:text-justift sm:text-lg">
                {news.head}
              </p>
              <p
                className="hidden font-roboto text-sm sm:text-md antialiased "
                // mengambil sebagaian paraghrap pada text body
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                  overflow: "hidden",
                }}
              >
                {news.body}
              </p>
              <span className="text-blue-800">Selengkapnya</span>
            </div>
          </div>
        ))}
        <Pagination />
      </div>
    </>
  );
}

export default Pagination;
