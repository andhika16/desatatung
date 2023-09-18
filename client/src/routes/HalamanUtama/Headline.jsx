import React from "react";
import { useState, useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import Content from "../../components/Content";
import { Routes, Route } from "react-router-dom";
import StrukturOrganisasi from "../PemerintahDesa/StrukturOrganisasi";
import Sidebar from "./Sidebar";
import { NewsContext } from "../../context/NewsContextComponent";

const Beranda = () => {
  return (
    <div className="beranda">
      <NewsContext>
        <Content data={data} />
        <Sidebar />
      </NewsContext>
    </div>
  );
};

export default Beranda;
