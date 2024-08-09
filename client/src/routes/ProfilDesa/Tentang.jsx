import React from "react";
import SidebarHeading from "../../components/SidebarHeading";

const Tentang = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <SidebarHeading judul={"Tentang"} />

      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="font-semibold text-2xl capitalize mb-4">
            Tentang Platform Tata Kelola Desa
          </h2>

          <div className="my-6">
            <h3 className="font-bold text-xl mb-2">
              Tujuan Pengembangan PTKD:
            </h3>
            <ul className="list-disc list-inside pl-6 space-y-2">
              <li>
                Meningkatkan kualitas perencanaan dan perumusan kebijakan
                pembangunan desa dan kawasan perdesaan.
              </li>
              <li>Meningkatkan kualitas penyelenggaraan pemerintahan desa.</li>
              <li>Meningkatkan kualitas pelayanan publik.</li>
              <li>Meningkatkan kualitas pengelolaan keuangan desa.</li>
            </ul>
          </div>

          <div className="my-6">
            <h3 className="font-bold text-xl mb-2">
              Ruang Lingkup Pengembangan PTKD Meliputi:
            </h3>
            <ul className="list-disc list-inside pl-6 space-y-2">
              <li>Kedudukan, fungsi, dan manfaat PTKD</li>
              <li>Perangkat PTKD</li>
              <li>Muatan PTKD</li>
              <li>Pengembangan PTKD</li>
              <li>Pengelolaan PTKD</li>
              <li>Tata cara dan penerapan PTKD</li>
              <li>Pembiayaan</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mt-6 border-l-4 border-slate-800">
          <h3 className="font-bold text-xl text-slate-900 mb-4">Kantor</h3>
          <p className="text-lg mb-4">Desa Tatung - Balong - Ponorogo</p>
          <table className="w-full text-left">
            <tbody>
              <tr>
                <td className="font-semibold py-2">Alamat</td>
                <td className="py-2">
                  Jl. Raya Ponorogo Balong, Tatung, Balong, Ponorogo
                </td>
              </tr>
              <tr>
                <td className="font-semibold py-2">Kode Pos</td>
                <td className="py-2">83461</td>
              </tr>
              <tr>
                <td className="font-semibold py-2">No. Telp</td>
                <td className="py-2">08329993023</td>
              </tr>
              <tr>
                <td className="font-semibold py-2">Fax</td>
                <td className="py-2">N/A</td>
              </tr>
              <tr>
                <td className="font-semibold py-2">Email</td>
                <td className="py-2">pemdes@tatung-balong.desa.id</td>
              </tr>
              <tr>
                <td className="font-semibold py-2">Website</td>
                <td className="py-2">
                  <a
                    href="https://tatung-balong.desa.id"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://tatung-balong.desa.id
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
