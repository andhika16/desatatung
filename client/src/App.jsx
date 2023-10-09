import Navbar from "./components/Navbar";
import { NewsContext } from "./context/NewsContextComponent";
import Headline from "./routes/HalamanUtama/Headline";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import LayananPenduduk from "./routes/PemerintahDesa/LayananPenduduk";
import Pertanian from "./routes/PemerintahDesa/Pertanian";
import Perangkat from "./routes/PemerintahDesa/Perangkat";
import Footer from "./components/Footer";
import StrukturDesa from "./routes/PemerintahDesa/StrukturDesa";
import Tentang from "./routes/ProfilDesa/Tentang";
import LembagaDesa from "./routes/PemerintahDesa/LembagaDesa";
const url = "https://imdb8.p.rapidapi.com/actors/get-all-news?nconst=nm0001667";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "49805673bdmshf7dbdfd1b2374e1p110fdajsnedd9d28c0881",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

function App() {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setShowData(json.items);
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <NewsContext.Provider value={{ news: showData }}>
      <div className="App">
        <Router>
          <div id="content"></div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Headline />} />
            <Route path="/layananpenduduk" element={<LayananPenduduk />} />
            <Route path="/pertanian" element={<Pertanian />} />
            <Route path="/strukturdesa" element={<StrukturDesa />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/lembagadesa" element={<LembagaDesa />} />
            <Route path="/perangkat" element={<Perangkat />} />
            
          </Routes>
          <Footer />
        </Router>
      </div>
    </NewsContext.Provider>
  );
}

export default App;
