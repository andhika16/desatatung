import React from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import Pagination from "../../components/Pagination";
const Home = () => {
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
    <div>
      <Pagination data={data} />
    </div>
  );
};

export default Home;
