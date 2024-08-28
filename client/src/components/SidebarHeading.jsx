import React from "react";

const SidebarHeading = ({ judul, icon }) => {
  return (
    <div className=" text-white flex items-center bg-slate-900 py-3 hover:bg-slate-700 transition-colors duration-200">
      <div className="mr-3 text-lg">{icon}</div>
      <h1 className="font-openSans text-2xl capitalize font-bold">{judul}</h1>
    </div>
  );
};

export default SidebarHeading;
