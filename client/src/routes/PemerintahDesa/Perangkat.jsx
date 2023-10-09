import React from "react";
import SidebarHeading from "../../components/SidebarHeading";
import Kepaladesa from "../assets/images/kepaladesa.jpg";



const Perangkat = () => {
  return (
    <div>
      <div  className="m-2 ">
        <div className="">
            <SidebarHeading judul={"Perangkat Desa"} />
        </div>
        <div className="sm:w-[20vw] sm:h-[15vw] ">
          <img className="w-full h-full object-cover" src={Kepaladesa} alt="" />
        </div>
        <div className="relative bg-slate-400 text-white uppercase p-3 top-[-10%]">
          <p>Kepala Desa</p>
        </div>
      </div>
    </div>
  );
};

export default Perangkat;
