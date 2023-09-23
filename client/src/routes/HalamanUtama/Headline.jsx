import React from "react";
import Content from "../../components/Content";
import Sidebar from "./Sidebar";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import OptionSection from "../../components/OptionSection";
const Headline = () => {
  return (
    <div className="sm:flex ">
      <OptionSection />
      <Content  />
      <Sidebar />
    </div>
  );
};

export default Headline;
