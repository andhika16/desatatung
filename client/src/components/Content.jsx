import ReactPaginate from "react-paginate";
import { useContext, useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Sidebar from "../routes/HalamanUtama/Sidebar";
import { galeri } from "../assets/Link";
import SidebarHeading from "./SidebarHeading";
import { useNewsContext } from "../context/NewsContextComponent";

function Pagination() {
  const { showData: data, isLoading } = useNewsContext();
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
    <div className="py-10 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold underline underline-offset-4">
            Berita Desa Terkini
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-6 lg:pr-6">
            {isLoading ? (
              <div className="flex justify-center items-center h-48">
                <div className="flex space-x-2">
                  <span className="animate-bounce inline-block w-3 h-3 bg-slate-900 rounded-full"></span>
                  <span className="animate-bounce inline-block w-3 h-3 bg-slate-900 rounded-full animation-delay-200"></span>
                  <span className="animate-bounce inline-block w-3 h-3 bg-slate-900 rounded-full animation-delay-400"></span>
                </div>
              </div>
            ) : (
              <>
                {currentItems.map((news, index) => (
                  <div
                    className="flex flex-col lg:flex-row bg-white shadow-lg overflow-hidden"
                    key={index}
                  >
                    <div className="w-full lg:w-1/2 h-48 lg:h-60 bg-cover bg-center">
                      <img
                        className="w-full h-full object-cover"
                        src={news.image.url}
                        alt={news.image.id}
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <p className="font-semibold text-gray-900 text-lg lg:text-xl">
                        {news.head}
                      </p>
                      <p className="font-roboto text-sm lg:text-md antialiased line-clamp-3 leading-relaxed mb-4 text-gray-700">
                        {news.body}
                      </p>
                      <a
                        href="#"
                        className="text-blue-800 font-semibold text-sm lg:text-md"
                      >
                        Selengkapnya
                      </a>
                    </div>
                  </div>
                ))}
                <ReactPaginate
                  breakLabel="..."
                  nextLabel={<FaArrowAltCircleRight />}
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel={<FaArrowAltCircleLeft />}
                  renderOnZeroPageCount={null}
                  containerClassName="flex justify-center items-center mt-6"
                  pageLinkClassName="font-roboto font-bold mx-2 text-black hover:text-slate-400 transition-colors duration-200"
                  previousClassName="font-roboto font-bold text-black hover:text-slate-400 transition-colors duration-200"
                  nextLinkClassName="font-roboto font-bold text-black hover:text-slate-400 transition-colors duration-200"
                  activeLinkClassName="p-2 text-black bg-slate-400"
                />
              </>
            )}
          </div>
          <Sidebar />
        </div>

        <div className="mt-10 bg-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SidebarHeading judul={"Galeri Desa Tatung"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {galeri.map((galeri, index) => (
                <div
                  key={index}
                  className="relative w-full h-48 sm:h-60 md:h-72 bg-cover bg-center"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={galeri.img}
                    alt={galeri.judul}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center">
                    <p className="text-sm sm:text-base">{galeri.judul}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
