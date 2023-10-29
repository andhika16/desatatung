import React from "react";
import Card from "../../components/Card";
import { berita } from "../../assets/Link";
import img from "../../assets/ex.jpeg";
import SidebarHeading from "../../components/SidebarHeading";
import OptionSection from "../../components/OptionSection";
import { Link } from "react-router-dom";

const Berita = () => {
  return (
    <div className="flex flex-col ">
      <div className="bg-slate-900 text-white">
        <SidebarHeading judul={"layanan penduduk"} />
      </div>
      <div className="sm:flex flex-row justify-between px-10">
        <div className="flex flex-col ">
          {berita.map((berita, index) => (
            <Link to={`/halamanberita`} key={index}>
              <Card
                key={index}
                judul={berita.judul}
                tanggal={berita.tanggal}
                isi={berita.isi}
                img={img}
              />
            </Link> 
          ))}
        </div>
        <div className="sm:w-1/4 sm:mx-2 sm:p-5 ">
          <p className="bg-slate-800 text-white font-semibold p-2 rounded">
            Pengumuman
          </p>
          <SidebarHeading judul={"Pendaftaran Kartu Prakerja"} />
          <SidebarHeading judul={"Pendaftaran Informasi KK"} />
          <SidebarHeading judul={"Informasi Bantuan"} />
        </div>
      </div>
    </div>
  );
};

export default Berita;
