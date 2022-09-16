import React from "react";

const Dropdown = () => {
  return (
    <>
      <div className="relative group m-4">
        <div className="flex flex-row   font-inter">
          <p>Profil desa</p>
        </div>
        <div className="absolute mx-5 z-10 hidden bg-grey-200 group-hover:block ">
          <div className="px-2 pt-2 pb-4 bg-white  shadow-lg w-[80px] text-center">
            <p>
              <a href="anu">anu</a>
            </p>
            <p>
              <a href="anu">anu</a>
            </p>
            <p>
              <a href="anu">anu</a>
            </p>
            <p>
              <a href="anu">anu</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
