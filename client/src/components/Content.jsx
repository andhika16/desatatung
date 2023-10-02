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
          <Carousel />
          <OptionSection />
          <div className="">
            <h1 className="text-lg font-semibold  text-center">KABAR DESA</h1>
          </div>
          <div className="sm:flex">
            <div className="grid sm:grid-cols-3 gap-2  ">
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
      <div className="mt-5">
        <div className="m-2">
          <SidebarHeading judul={"galeri desa tatung"} />
        </div>
        <div className="flex flex-col sm:flex-row absolute">
          {galeri.map((galeri, index) => (
            <div key={index} className="m-5">
              <div className="sm:w-[20vw] sm:h-[15vw] ">
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
        <div className="">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15806.896464944157!2d111.41796678261024!3d-7.923857873067884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7975757a7cacf3%3A0x36709874859b2d68!2sTatung%2C%20Kec.%20Balong%2C%20Kabupaten%20Ponorogo%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1696238729572!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  );
}

export default Pagination;
