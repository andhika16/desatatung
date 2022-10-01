import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";

function Pagination(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const ItemsPerPage = 4;

  useEffect(() => {
    const endOffset = itemOffset + ItemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / ItemsPerPage));
  }, [itemOffset, ItemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * ItemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems.map((news, index) => (
        <div className="flex flex-col w-full  md:flex-row py-3" key={index}>
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
      ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel={<FaArrowAltCircleRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={<FaArrowAltCircleLeft />}
        renderOnZeroPageCount={null}
        containerClassName="w-full flex flex-row border my-5 items-center bg-slate-800 text-white p-3 rounded-lg"
        pageLinkClassName="font-inter font-bold mx-3"
        previousClassName="font-inter font-bold"
        nextLinkClassName="font-inter font-bold "
        activeLinkClassName="active bg-white p-2 rounded text-black"
      />
    </>
  );
}

export default Pagination;
