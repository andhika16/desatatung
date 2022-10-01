import React from "react";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import Pagination from "../components/Pagination";

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
    <div className="w-auto">
      <div className="flex flex-col m-3">
        <div>
          <p className="font-inter text-lg font-semibold uppercase text-center">
            berita terkini
          </p>
        </div>
        <Pagination data={data} />
      </div>
    </div>
  );
};

export default Beranda;
