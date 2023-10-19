import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-slate-900 sm:h-[60vh]  sm:p-10 text-white flex flex-wrap  justify-between">
        <div className="sm:w-1/4 mx-5 mt-10 ">
          <p className="text-2xl font-semibold my-2">Profil</p>
          <p className="font-bold text-sm my-3">
            Desa Tatung - Balong <br></br> Kabupaten Ponorogo - Jawa Timur
          </p>
          <p className="text-[1vw]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero totam
            molestiae eum? Reiciendis, voluptate dignissimos aut inventore
            reprehenderit ut facere?
          </p>
        </div>
        <div className="sm:w-1/4 mx-5 mt-10 ">
          <p className="text-2xl font-semibold">Informasi Daerah</p>
          <ol className="text-sm">
            <ul>Ponorogo</ul>
            <ul>Kecamatan provinsi</ul>
            <ul>Provinsi ponorogo</ul>
            <ul>Kapolres Ponorogo</ul>
          </ol>
        </div>
        <div className="sm:w-1/4 mx-5 mt-10 space-y-2 text-sm">
          <p className="text-2xl font-semibold ">Kontak</p>
          <p>
            Jl.Sadewo,RT/RW 01/02,Ds.tatung,Kec.balong,Kab.ponorogo Kode pos
            83992
          </p>
          <p className="flex items-center">
            <FaPhoneAlt /> 083434003
          </p>
          <p className="flex items-center">
            <FaEnvelope /> pemdes@tatungbalong.com
          </p>
          <span className="flex text-lg space-x-3">
            <FaTwitter/>
            <FaInstagram/>
            <FaYoutube/>
            <FaFacebook/>
          </span>
          <div className="">
            <p>Jumlah pengungjung website</p>
            <p className="text-2xl font-thin">99300</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[10vh] bg-gray-500 text-white flex items-center justify-center">
        <p className="text-sm font-poppins">
          © 2021 Desa Pintar. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
