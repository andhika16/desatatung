import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-slate-900 text-white mt-auto ">
      <div className="container mx-auto p-6 sm:p-10 flex flex-col sm:flex-row justify-between">
        {/* Profil Section */}
        <div className="sm:w-1/4 mb-6 sm:mb-0">
          <p className="text-2xl font-semibold mb-3">Profil</p>
          <p className="font-bold text-sm mb-3">
            Desa Tatung - Balong <br /> Kabupaten Ponorogo - Jawa Timur
          </p>
          <p className="text-sm sm:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero totam
            molestiae eum? Reiciendis, voluptate dignissimos aut inventore
            reprehenderit ut facere?
          </p>
        </div>

        {/* Informasi Daerah Section */}
        <div className="sm:w-1/4 mb-6 sm:mb-0">
          <p className="text-2xl font-semibold mb-3">Informasi Daerah</p>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>Ponorogo</li>
            <li>Kecamatan Provinsi</li>
            <li>Provinsi Ponorogo</li>
            <li>Kapolres Ponorogo</li>
          </ul>
        </div>

        {/* Kontak Section */}
        <div className="sm:w-1/4 mb-6 sm:mb-0">
          <p className="text-2xl font-semibold mb-3">Kontak</p>
          <p className="text-sm mb-2">
            Jl. Sadewo, RT/RW 01/02, Ds. Tatung, Kec. Balong, Kab. Ponorogo Kode
            Pos 83992
          </p>
          <p className="flex items-center text-sm mb-2">
            <FaPhoneAlt className="mr-2" /> 083434003
          </p>
          <p className="flex items-center text-sm mb-2">
            <FaEnvelope className="mr-2" /> pemdes@tatungbalong.com
          </p>
          <div className="flex space-x-3 text-lg mb-2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
          <div>
            <p className="text-sm">Jumlah Pengunjung Website</p>
            <p className="text-2xl font-thin">99,300</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-500 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Desa Pintar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
