import React from "react";
import SidebarHeading from "../../components/SidebarHeading";
import dadu from "../../assets/ex.jpeg";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaRegBookmark,
  FaInfo,
  FaPaperclip,
} from "react-icons/fa";

const HalamanBerita = () => {
  const data = [
    {
      id: 1,
      nama: "lorem ipsum dolor sit amet cons Quisquam, voluptatum.",
    },
    {
      id: 2,
      nama: "lorem ipsum elit. Quisquam, voluptatum.",
    },
    {
      id: 3,
      nama: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ];

  return (
    <div className="mb-10">
      <div className="bg-slate-900 text-white ">
        <SidebarHeading judul={"halaman berita"} />
      </div>
      <div className="mx-11 mt-10 md:flex">
        <div className="max-w-4xl flex flex-col items-center">
          <div className="text-2xl font-semibold">
            <p>
              Pengadaan anggaran yang dilaksanakan oleh pemerintah kabupaten
              ponorogo di desa tatung
            </p>
            <span></span>
          </div>
          <div className="my-5">
            <img className="w-[90vw] h-full" src={dadu} alt="" />
          </div>
          <div className="font-thin text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In a
              aliquid cum? Facere illo deleniti ab minus! Aspernatur voluptatem,
              dignissimos quibusdam natus, voluptas assumenda repudiandae nam
              unde asperiores, amet ea. Nostrum nulla pariatur aperiam rem
              ipsam, praesentium maiores dicta expedita aut eligendi iste
              reiciendis quae placeat distinctio, sunt, exercitationem deserunt?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              quibusdam atque at! Nostrum odit dolorem mollitia ex iusto eaque
              ad sit esse possimus corrupti excepturi laborum recusandae, labore
              blanditiis maiores tenetur obcaecati.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              iusto numquam magni!
            </p>
          </div>
        </div>
        <div className=" md:ml-10 ">
          <div className="">
            <div className="w-full border-slate-800 border-b-2 p-2 mb-5">
              <p className="text-1xl  text-black font-semibold ">
                Berita Lainya
              </p>
            </div>
            <div className="space-y-4 ">
              {data.map((item) => {
                return (
                  <div className="flex " key={item.id}>
                    <span className="font-bold text-slate-300 p-4  mr-3">
                      {item.id}
                    </span>
                    <p className="font-roboto font-semibold">{item.nama}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-10">
            <div className="bg-slate-200 rounded">
              <div className="w-full  rounded p-2 ">
                <p className="text-1xl font-semibold ">Informasi</p>
              </div>
              <div className="space-y-4 p-3">
                {data.map((item) => {
                  return (
                    <div
                      className="flex "
                      key={item.id}
                    >
                      <p className="font-roboto font-semibold">
                        <FaRegBookmark />
                        {item.nama}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalamanBerita;
