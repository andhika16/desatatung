import React from "react";

const SidebarHeading = ({ judul, icon }) => {
  return (
    <div className="flex flex-row items-center  rounded ">
      <div className="mr-2 ">{icon}</div>
      <h1 className="font-inter  tracking-wide text-lg  capitalize">{judul}</h1>
    </div>
  );
};

export default SidebarHeading;
