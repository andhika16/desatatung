import ReactPaginate from "react-paginate";
import { NewsContext } from "../context/NewsContextComponent";
import { useContext, useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import OptionSection from "./OptionSection";
import Sidebar from "../routes/HalamanUtama/Sidebar";
import Carousel from "./Carousel";
import { galeri } from "../assets/Link";
import SidebarHeading from "./SidebarHeading";
function Pagination() {
  const { news } = useContext(NewsContext);
  const data = news;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);
  const ItemsPerPage = 3;

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
      <div className="">
        <div className="">
          <Carousel />
          <OptionSection />
          <div className="px-5">
            <div className="mt-10 ">
              <h1 className="text-lg font-semibold  ">KABAR DESA</h1>
            </div>
            <div className="sm:flex ">
              <div className="flex flex-col">
                {currentItems.map((news, index) => (
                  <div
                    className="sm:flex flex-row sm:max-w-6xl  my-2  "
                    key={index}
                  >
                    <div className="sm:w-[40vw] sm:h-[30vh] items-center bg-cover overflow-hidden ">
                      <img
                        className="w-full h-full object-cover"
                        src={news.image.url}
                        alt={news.image.id}
                      />
                    </div>
                    <div className="sm:max-w-sm sm:mx-5">
                      <p className=" font-semibold  text-blue-800  sm:my-0  sm:text-left sm:text-lg">
                        {news.head}
                      </p>
                      <p
                        className="font-roboto text-sm sm:text-md antialiased line-clamp-3 leading-relaxed mt-0 mb-4 overflow-hidden"
                        // mengambil sebagaian paraghrap pada text body
                      >
                        {news.body}
                      </p>
                      {/* <span className="text-blue-800">Selengkapnya</span> */}
                    </div>
                  </div>
                ))}
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<FaArrowAltCircleRight />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<FaArrowAltCircleLeft />}
          renderOnZeroPageCount={null}
          containerClassName="sm:w-full flex flex-row justify-content-center items-center bg-slate-200 p-3 "
          pageLinkClassName="font-roboto font-bold mx-3"
          previousClassName="font-roboto font-bold"
          nextLinkClassName="font-roboto font-bold "
          activeLinkClassName="active p-2 rounded text-white bg-slate-400"
        />
      </div>
      <div className="mt-5 bg-slate-100 ">
        <div className="m-2">
          <SidebarHeading judul={"galeri desa tatung"} />
        </div>
        <div className="sm:flex flex-wrap  ">
          {galeri.map((galeri, index) => (
            <div key={index} className="m-2 sm:max-w-sm ">
              <div className="sm:w-full sm:h-[30vh]">
                <img
                  className="w-full h-full object-cover"
                  src={galeri.img}
                  alt=""
                />
              </div>
              <div className="relative bg-slate-400 text-white uppercase p-3 top-[-10%]">
                <p>{galeri.judul}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=""></div>
      </div>
    </>
  );
}

export default Pagination;
