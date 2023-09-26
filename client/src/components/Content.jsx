import ReactPaginate from "react-paginate";
import { NewsContext } from "../context/NewsContextComponent";
import { useContext, useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import OptionSection from "./OptionSection";
import SidebarHeading from "./SidebarHeading";
import Sidebar from "../routes/HalamanUtama/Sidebar";
function Pagination() {
  const { news } = useContext(NewsContext);
  const data = news;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);
  const ItemsPerPage = 7;

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
          <OptionSection />
          <div className="">
            <h1 className="text-4xl font-semibold  text-center">Kabar Desa</h1>
          </div>
          <div className="sm:flex">
            <div className="grid sm:grid-cols-3 gap-2">
              {currentItems.map((news, index) => (
                <div
                  className="flex flex-col sm:max-w-6xl  p-2 my-2 sm:m-2 "
                  key={index}
                >
                  <div className="items-center bg-cover overflow-hidden">
                    <img
                      className="w-full sm:h-[30vh] object-cover"
                      src={news.image.url}
                      alt={news.image.id}
                    />
                  </div>
                  <div className=" w-auto ">
                    <p
                      className="font-inter sm:my-0  sm:text-left sm:text-lg"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        overflow: "hidden",
                      }}
                    >
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
                      {/* {news.body} */}
                    </p>
                    {/* <span className="text-blue-800">Selengkapnya</span> */}
                  </div>
                </div>
              ))}
            </div>
            <Sidebar />
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
    </>
  );
}

export default Pagination;
