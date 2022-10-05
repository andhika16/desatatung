import React from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import Pagination from "../../components/Pagination";
const Home = ({ data, isLoading }) => {
  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      {data === undefined ? (
        <div>
          {" "}
          <p className="font-inter text-bold text-2xl text-center my-96">
            Maaf Website sedang dalam maintenance
          </p>{" "}
        </div>
      ) : (
        data.map((news, index) => (
          <div className="flex flex-col md:flex-row py-3" key={index}>
            <div className="max-w-auto object-contain">
              <div className="sm:w-full md:w-60 md:h-32   bg-cover overflow-hidden">
                {/* <img
                className="w-full h-auto object-contain"
                src={`https://picsum.photos/200/300?random=${Math.random()}`}
                alt="photos"
              /> */}
                <img
                  className="w-full h-auto object-contain"
                  src={news.image.url}
                  alt={news.image.id}
                />
              </div>
            </div>
            <div className="sm:m-0 mt-4 md:ml-3 w-auto ">
              <p className="font-inter sm:my-0 font-semibold break-words text-justify sm:text-lg">
                {news.head}
              </p>
              <p
                className="hidden font-inter text-sm sm:text-md antialiased text-justify leading-5"
                // mengambil sebagaian paraghrap pada text body
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 4,
                  overflow: "hidden",
                }}
              >
                {news.body}
              </p>
              <span className="text-blue-800">Selengkapnya</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
