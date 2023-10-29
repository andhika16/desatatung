import React from "react";
import SidebarHeading from "../../components/SidebarHeading";

const Tentang = () => {
  return (
    <div className="">
      <div className="bg-slate-900 text-white">
        <SidebarHeading judul={"tentang"} />
      </div>
      <div className="my-5 m-2 px-10">
        <div className="">
          <div className="font-semibold text-2xl capitalize ">
            <p>tentang platform tata kelola desa </p>
          </div>
          <div className="my-5">
            <p>Tujuan Pengembangan PTKD adalah :</p>
            <ol>
              <li>
                1. Meningkatkan kualitas perencanaan dan perumusan kebijakan
                pembangunan desa dan kawasan perdesaan.
              </li>
              <li>
                2. Meningkatkan kualitas penyelenggaraan pemerintahan desa.
              </li>
              <li>3. Meningkatkan kualitas pelayanan publik.</li>
              <li>4. Meningkatkan kualitas pengelolaan keuangan desa.</li>
            </ol>
          </div>
          <div className="my-5">
            <p>Ruang Lingkup Pengembangan PTKD meliputi:</p>
            <ol>
              <li>a. Kedudukan, fungsi dan manfaat PTKD</li>
              <li>b. Perangkat PTKD</li>
              <li>c. Muatan PTKD</li>
              <li>d. Pengembangan PTKD</li>
              <li>e. Pengelolaan PTKD</li>
              <li>f.Tata cara dan penerapan PTKD</li>
              <li>g.Pembiayaan</li>
            </ol>
          </div>
        </div>
        <div className="border-l-4 border-slate-800 pl-2">
          <p className="font-bold text-slate-900 ">Kantor</p>
          <p>Desa Tatung - Balong - Ponorogo</p>
          <table>
            <tbody>
              <tr>
                <td>Alamat</td>
                <td>Jl.Raya Ponorogo Balong, Tatung,Balong,Ponorogo</td>
              </tr>
              <tr>
                <td>Kode Pos</td>
                <td>83461</td>
              </tr>
              <tr>
                <td>No.Telp</td>
                <td>08329993023</td>
              </tr>
              <tr>
                <td>Fax</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>pemdes@tatung-balong.desa.id</td>
              </tr>
              <tr>
                <td>Website</td>
                <td>https://tatung-balong.desa.id</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
