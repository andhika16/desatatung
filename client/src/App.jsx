import Sidebar from "./routes/Sidebar";
import Navbar from "./components/Navbar";
import LoadingSpinner from "./components/LoadingSpinner";
import Beranda from "./routes/Beranda";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";

function App() {
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

  return (
    <Router>
      <div className="App">
        <div className="lg:mx-20">
          <Navbar />
          <div className="w-[100%]  flex flex-col sm:flex-row sm:mx-5">
            <Beranda />
            <Sidebar />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
