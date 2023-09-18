import{ React,createContext} from 'react'

const url = "https://imdb8.p.rapidapi.com/actors/get-all-news?nconst=nm0001667";

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




export const NewsContext = createContext();  
