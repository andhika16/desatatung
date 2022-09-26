import React from "react";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const Beranda = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setShowData] = useState([]);
  const url =
    "https://imdb8.p.rapidapi.com/actors/get-all-news?nconst=nm0001667";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "49805673bdmshf7dbdfd1b2374e1p110fdajsnedd9d28c0881",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setShowData(json.items);
        setLoading(false);
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="">
      <div className="flex flex-col  p-3">
        <span>
          <p className="font-inter text-lg font-semibold uppercase text-center">
            berita terkini
          </p>
        </span>
        {/* {data.map((news, index) => (
          <div className="flex flex-col   ss:flex-row py-3" key={index}>
            <div className="ss:w-3/5 sm:w-[200px] h-[200px] object-contain">
              <img
                className="w-[100%] h-[100%] object-contain rounded"
                src={news.image.url}
                alt={news.image.id}
              />
            </div>
            <div className=" sm:m-0 sm:ml-3 sm:w-3/4">
              <p className="font-inter font-semibold m-3 text-justify">
                {news.head}
              </p>
              <p className="font-inter  text-md antialiased text-justify m-3 leading-6 "></p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Beranda;
