import React from "react";

const SidebarHeading = ({ judul, icon }) => {
  return (
    <div className="flex flex-row items-center bg-slate-800 rounded p-2">
      <div className="mr-2 text-dimWhite">{icon}</div>
      <h1 className="font-inter text-dimWhite tracking-wide text-lg  capitalize">
        {judul}
      </h1>
    </div>
  );
};

export default SidebarHeading;
