import React, { useState, useEffect } from "react";

const AparaturDesaSlider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mengatur interval untuk berganti slide secara otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Slide berganti setiap 3 detik

    return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
  }, [data.length]);

  const { name, position, photo } = data[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden shadow-lg">
        <img
          src={photo}
          alt={`${name} - ${position}`}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="font-bold text-lg">{name}</p>
      <p className="text-gray-600">{position}</p>
    </div>
  );
};

export default AparaturDesaSlider;
