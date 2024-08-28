import React from "react";
import logoResident from "../assets/house.png";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="bg-slate-800 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 ">
        <div className="flex items-center justify-center w-full md:w-auto">
          <button
            className="text-white md:hidden flex"
            onClick={() => setShowNav(!showNav)}
          >
            {showNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <Link to="/" className="flex justify-center space-x-2 flex-1  sm:items-center">
            <img className="w-10 h-auto " src={logoResident} alt="house" />
            <div className="text-white">
              <h1 className="text-lg font-bold sm:text-3xl font-openSans ">
                Website Resmi Desa Tatung
              </h1>
              <p className="text-sm font-outfit">Kecamatan Balong, Kabupaten Ponorogo</p>
            </div>
          </Link>
        </div>
        <div
          className={`md:flex items-center space-x-4 ${
            showNav ? "" : "hidden"
          }`}
        >
          <div className="text-sm font-outfit flex items-center space-x-2">
            <FaPhoneAlt />
            <p>022-242999</p>
            <FaEnvelope />
            <p>pemdes@tatungbalong.com</p>
          </div>
        </div>
      </div>
      <div
        className={`bg-slate-800 sm:py-2 ${
          showNav ? "" : "hidden"
        } md:flex md:justify-center`}
      >
        <div className="container mx-auto flex flex-wrap items-center text-sm font-openSans font-medium uppercase ">
          <div className="m-2">
            <Link to="/" className="">
              Beranda
            </Link>
          </div>
          <Dropdown
            nama="Profil Desa"
            list={["visimisi", "sejarah", "tentang"]}
          />
          <Dropdown
            nama="Pemerintahan"
            list={["lembagadesa", "perangkat"]}
          />
          <Dropdown
            nama="Informasi Publik"
            list={[
              "pengumuman",
              "agenda-kegiatan",
              "galeri",
              "musyawarah",
              "berita",
            ]}
          />
          <div className="m-2">
            <Link to="/struktur-desa" className="">
              Struktur Desa
            </Link>
          </div>
          <div className="m-2">
            <Link to="/pertanian" className="">
              Pertanian
            </Link>
          </div>
          <div className="m-2">
            <Link to="/layananpenduduk" className="">
              Layanan Kependudukan
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
