import React from "react";

const SidebarHeading = ({ judul, icon }) => {
  return (
    <div className="flex flex-row items-center  p-2 ">
      <div className="mr-2 text-[17px] ">{icon}</div>
      <h1 className="capitalize text-sm  font-semibold ">{judul}</h1>
    </div>
    
  );
};

export default SidebarHeading;
