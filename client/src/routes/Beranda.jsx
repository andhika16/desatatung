import React from "react";
import { useState, useEffect } from "react";

const Beranda = () => {
  const [data, setShowData] = useState([]);
  const url =
    "https://bloomberg-market-and-financial-news.p.rapidapi.com/stories/list?template=CURRENCY&id=usdjpy";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "49805673bdmshf7dbdfd1b2374e1p110fdajsnedd9d28c0881",
      "X-RapidAPI-Host": "bloomberg-market-and-financial-news.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setShowData(json.stories))
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <div className="">
      <div className="flex flex-col  p-3">
        <span>
          <p className="font-inter text-lg font-semibold uppercase text-center">
            berita terkini
          </p>
        </span>
        {data.map((news, index) => (
          <div className="flex flex-col   ss:flex-row py-3" key={index}>
            <div className="ss:w-3/5 sm:w-full">
              <img
                className="w-[100%] h-[100%] object-contain rounded"
                src={news.thumbnailImage}
                alt={news.shortURL}
              />
            </div>
            <div className=" sm:m-0 sm:ml-3 sm:w-3/4">
              <p className="font-inter font-semibold m-3 text-justify">
                {news.title}
              </p>
              <p className="font-inter  text-md antialiased  m-3 leading-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates eos aut neque autem nam consequuntur optio aliquid
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beranda;
