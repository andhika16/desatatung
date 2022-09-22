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
          <p className="font-inter text-lg font-semibold capitalize text-center">
            berita terkini
          </p>
        </span>
        {data.map((news, index) => (
          <div className="flex flex-col   ss:flex-row py-3" key={index}>
            <div className="ss:w-3/5 sm:w-2/5">
              <img
                className="w-[100%] h-[100%] object-contain rounded"
                src={news.thumbnailImage}
                alt={news.shortURL}
              />
            </div>
            <div className=" sm:m-0 sm:ml-3 ss:w-80">
              <p className="font-inter font-semibold m-3">{news.title}</p>
              <p className="font-inter text-sm  m-3 leading-6 break-all">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates eos aut neque autem nam consequuntur optio aliquid
                dolorem natus eaque esse voluptatum.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beranda;

// news = await fetch(
//   "https://bloomberg-market-and-financial-news.p.rapidapi.com/stories/list",
//   {
//     method: "GET",
//     params: { template: "CURRENCY", id: "usdjpy" },
//     headers: {
//       "X-RapidAPI-Key": "49805673bdmshf7dbdfd1b2374e1p110fdajsnedd9d28c0881",
//       "X-RapidAPI-Host": "bloomberg-market-and-financial-news.p.rapidapi.com",
//     },
//   }
// );
