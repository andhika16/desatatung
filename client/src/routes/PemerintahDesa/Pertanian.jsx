import React from "react";
import { pertanian } from "../../assets/Link";
import SidebarHeading from "../../components/SidebarHeading";
import Card from "../../components/Card";
const Pertanian = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="bg-slate-900 text-white">
          <SidebarHeading judul={"layanan penduduk"} />
        </div>
        <div className="sm:flex flex-row justify-between">
          <div className="flex flex-col">
            {pertanian.map((layanan, index) => (
              <Card
                key={index}
                judul={layanan.nama}
                isi={layanan.isi}
                img={layanan.img}
              />
            ))}
          </div>
          <div className="sm:w-1/4 mx-2 p-5">
            <p className="bg-slate-800 text-white font-semibold p-2 rounded">
              Pengumuman
            </p>
            <SidebarHeading judul={"Pendaftaran Kartu Prakerja"} />
            <SidebarHeading judul={"Pendaftaran Informasi KK"} />
            <SidebarHeading judul={"Informasi Bantuan"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pertanian;
