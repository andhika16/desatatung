import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";

function Pagination() {
  const [data, setShowData] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [isLoading, setLoading] = useState(true);

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
