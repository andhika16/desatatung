import React from "react";
import { perangkat } from "../../assets/Link";
import SidebarHeading from "../../components/SidebarHeading";

const Perangkat = () => {
  return (
    <div className="mb-[200px]">
      <div className="">
        <div className="bg-slate-900 text-white">
          <SidebarHeading judul={"Perangkat Desa"} />
        </div>
        <div className="sm:flex mt-10 ">
          {perangkat.map((item, index) => (
            <div key={index} className="mx-5 max-w-md w-[40vw] sm:w-[20vw] ">
              <div className=" sm:w-[20vw] sm:h-[15vw] ">
                <img
                  className="w-full h-full object-cover"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="relative bg-slate-900 text-white text-center uppercase p-3 top-[-10%]">
                <p className="font-bold">{item.nama}</p>
                <p>{item.jabatan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perangkat;
