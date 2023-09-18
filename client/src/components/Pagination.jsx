import {React,Context} from "react";
const Pagination = () => {
  const { data } = props;
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
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<FaArrowAltCircleRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<FaArrowAltCircleLeft />}
        renderOnZeroPageCount={null}
        containerClassName="sm:w-full flex flex-row items-center bg-slate-200 p-3 "
        pageLinkClassName="font-roboto font-bold mx-3"
        previousClassName="font-roboto font-bold"
        nextLinkClassName="font-roboto font-bold "
        activeLinkClassName="active p-2 rounded text-white bg-slate-400"
      />
    </div>
  );
};

export default Pagination;
