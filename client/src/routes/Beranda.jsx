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
    <div className="w-full">
      <div className="flex flex-col m-3">
        <div>
          <p className="font-inter text-lg font-semibold uppercase text-center">
            berita terkini
          </p>
        </div>
        {data.map((news, index) => (
          <div className="flex flex-col   ss:flex-row py-3" key={index}>
            <div className="ss:w-1/5 bg-cover object-contain">
              <img
                className="w-[100%] h-[100%] object-contain rounded"
                src={news.image.url}
                alt={news.image.id}
              />
            </div>
            <div className=" sm:m-0 sm:ml-3 sm:w-3/4">
              <p className="font-inter font-semibold m-3 text-justify sm:text-lg">
                {news.head}
              </p>
              <p className="font-inter truncate w-56 text-sm sm:text-md antialiased text-justify m-3 leading-6 ">
                {news.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beranda;
