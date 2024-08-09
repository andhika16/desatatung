import React from "react";
import SidebarHeading from "../../components/SidebarHeading";
import dadu from "../../assets/ex.webp";
import { FaRegBookmark } from "react-icons/fa";
import { berita } from "../../assets/Link";
const HalamanBerita = () => {
  return (
    <div className=" min-h-screen   ">
      <div className="bg-slate-900 text-white w-full">
        <SidebarHeading judul={"Hari Ini"} />
      </div>

      <div className=" container md:flex md:space-x-8 px-5">
        {/* Konten Utama */}
        <div className="md:flex-1 mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
            Pengadaan Anggaran Pemerintah Kabupaten Ponorogo di Desa Tatung
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Oleh Admin | 9 Agustus 2024
          </p>
          <div className="mb-6">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              src={dadu}
              alt="Gambar Berita"
            />
          </div>
          <div className="prose max-w-none text-justify font-openSans ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In a
              aliquid cum? Facere illo deleniti ab minus! Aspernatur voluptatem,
              dignissimos quibusdam natus, voluptas assumenda repudiandae nam
              unde asperiores, amet ea. Nostrum nulla pariatur aperiam rem
              ipsam, praesentium maiores dicta expedita aut eligendi iste
              reiciendis quae placeat distinctio, sunt, exercitationem deserunt?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              iusto numquam magni!
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="md:w-80">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">
              Berita Lainnya
            </h2>
            <div className="space-y-4">
              {berita.map((item, index) => (
                <div className="flex items-start space-x-3" key={item.id}>
                  <span className="text-gray-500 font-bold font-openSans">#</span>
                  <p className="text-lg font-medium text-gray-700 hover:text-blue-700 transition-colors">
                    {item.judul}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-slate-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Informasi
            </h2>
            <div className="space-y-4">
              {berita.map((item,index) => (
                <div className="flex items-center space-x-2" key={item.id}>
                  <span className="text-2xl font-openSans text-yellow-400 font-bold mr-2">{index + 1}.</span>
                  <p className="text-lg text-gray-700 font-openSans">{item.judul}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HalamanBerita;
