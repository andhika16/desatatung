import React from "react";

const SidebarHeading = ({ judul, icon }) => {
  return (
    <div className="bg-slate-900 text-white flex items-center p-3 hover:bg-slate-700 transition-colors duration-200">
      <div className="mr-3 text-lg">{icon}</div>
      <h1 className="capitalize text-base font-semibold">{judul}</h1>
    </div>
  );
};

export default SidebarHeading;
