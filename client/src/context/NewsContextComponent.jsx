import React, { createContext, useState, useEffect, useContext } from "react";

// Membuat Context untuk data berita
export const NewsContext = createContext();
export const NewsProvider = ({ children }) => {
  const [showData, setShowData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url =
    "https://imdb8.p.rapidapi.com/actors/get-all-news?nconst=nm0001667";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "49805673bdmshf7dbdfd1b2374e1p110fdajsnedd9d28c0881",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };
  useEffect(() => {
    setIsLoading(true);
    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.items)) {
          setShowData(data.items);
        } else {
          console.error("Unexpected JSON structure:", data);
        }
      })
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setIsLoading(false));
  }, []);

  // Menyediakan data showData ke seluruh komponen anak
  return (
    <NewsContext.Provider value={{ showData ,isLoading}}>{children}</NewsContext.Provider>
  );
};

// Hook untuk menggunakan NewsContext
export const useNewsContext = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNewsContext must be used within a NewsProvider");
  }
  return context;
};
