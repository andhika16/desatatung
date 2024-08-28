import React from "react";
import SidebarHeading from "../../components/SidebarHeading";
const LembagaDesa = () => {
  return (
    <div className="flex flex-col">
      <div className="">
        <SidebarHeading judul={"Lembaga Desa"} />
      </div>
      <div className="p-10">
        <div className="">
          <table className="w-full font-openSans text-left capitalize">
            <tbody>
              <tr>
                <th>Nama Lembaga</th>
                <th>Alamat</th>
              </tr>
              <tr>
                <td>badan permusyawaratan desa</td>
                <td>Jl.Gatut Kaca RT/RW: 01/02 No.09</td>
              </tr>
              <tr>
                <td>Badan usaha milik desa</td>
                <td>Jl.Kendil RT/RW: 02/02 No.04</td>
              </tr>
              <tr>
                <td>Karang Taruna desa</td>
                <td>Jl.Sadewo RT/RW: 01/01 No.03</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LembagaDesa;
