import React from "react";

import { Routes, Route, useParams } from "react-router-dom";
import StrukturOrganisasi from "./pemerintah desa/StrukturOrganisasi";
import LembagaDesa from "./pemerintah desa/LembagaDesa";
import Home from "./Halaman Utama/Home";

const Beranda = () => {
  return (
    <div className="w-auto">
      <div className="flex flex-col m-3">
        <div>
          <p className="font-inter text-lg font-semibold uppercase text-center">
            test
          </p>
        </div>
        <div className="w-full">
          <Routes>
            <Route path="lembagaDesa" element={<LembagaDesa />} />
            <Route path="strukturDesa" element={<StrukturOrganisasi />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
