import Navbar from "./components/Navbar";

import Headline from "./routes/HalamanUtama/Headline";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import LayananPenduduk from "./routes/PemerintahDesa/LayananPenduduk";
import Pertanian from "./routes/PemerintahDesa/Pertanian";
import Perangkat from "./routes/ProfilDesa/Perangkat";
import Footer from "./components/Footer";
import VisiMisi from "./routes/ProfilDesa/VisiMisi";
import Tentang from "./routes/ProfilDesa/Tentang";
import LembagaDesa from "./routes/PemerintahDesa/LembagaDesa";
import Berita from "./routes/PemerintahDesa/Berita";
import HalamanBerita from "./routes/PemerintahDesa/HalamanBerita";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <div id="content" className="flex-1">
          <Navbar />
          <Routes>
            <Route path="/" element={<Headline />} />
            <Route path="/layananpenduduk" element={<LayananPenduduk />} />
            <Route path="/pertanian" element={<Pertanian />} />
            <Route path="/visimisi" element={<VisiMisi />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/lembagadesa" element={<LembagaDesa />} />
            <Route path="/perangkat" element={<Perangkat />} />
            <Route path="/halamanberita" element={<HalamanBerita />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
