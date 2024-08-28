import React from "react";

const Sidebar = () => {
  return (
    <div className="sm:w-1/3 font-openSans px-6 ">
      <h1 className="text-3xl text-center  pb-10 capitalize font-bold text-slate-800 ">
        Agenda kegiatan
      </h1>
      <div className="space-y-6">
        {/* Sistem Informasi Section */}

        {/* Agenda Kegiatan Section */}
        <div>
          <div className="space-y-4 mt-3">
            {[
              {
                date: "Sep 23 2023",
                title: "Musyawarah Pengukuran Tanah",
                location: "Balai Desa",
              },
              {
                date: "Jun 10 2023",
                title: "Rapat Anggaran Tahunan",
                location: "Kamituwo",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 border-b pb-2"
              >
                <span className="font-openSans uppercase p-2 bg-slate-900 text-white text-sm rounded">
                  {event.date}
                </span>
                <div>
                  <p className=" text-gray-800">{event.title}</p>
                  <p className="text-sm text-gray-500">
                    Lokasi: {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
