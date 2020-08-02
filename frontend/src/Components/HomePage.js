import SearchBar from "./SearchBar";
import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import ImageList from "./ImageList";

function HomePage() {
  const [images, setImages] = useState([]);
  const [initialLoad, setinitialLoad] = useState(true);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const per_page = 9;

  useEffect(async () => {
    if (initialLoad) {
      const response = await axios.get("https://api.unsplash.com/photos", {
        params: { page: currentPage, per_page: per_page },
        headers: {
          Authorization:
            "Client-ID o7dYoGTAAYKjip1p_dFQ6BJvbbAvLuxY6v_SDnbxsCw",
        },
      });

      setImages(response.data);
    }
  }, []);
  const onSearchSubmit = async (term) => {
    setinitialLoad(false);
    const response = await axios.get(
      "https://api.unsplash.com/search/photos/",
      {
        params: { page: currentPage, per_page: per_page, query: term },
        headers: {
          Authorization:
            "Client-ID o7dYoGTAAYKjip1p_dFQ6BJvbbAvLuxY6v_SDnbxsCw",
        },
      }
    );
    setQuery(term);
    setImages(response.data.results);
  };

  const onPageChange = async (term) => {
    let page = currentPage + 1;
    if (initialLoad == false) {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos/",
        {
          params: { page: page, per_page: per_page, query: query },
          headers: {
            Authorization:
              "Client-ID o7dYoGTAAYKjip1p_dFQ6BJvbbAvLuxY6v_SDnbxsCw",
          },
        }
      );
      setCurrentPage(page);
      setImages(response.data.results);
    } else {
      const response = await axios.get("https://api.unsplash.com/photos", {
        params: { page: page, per_page: per_page },
        headers: {
          Authorization:
            "Client-ID o7dYoGTAAYKjip1p_dFQ6BJvbbAvLuxY6v_SDnbxsCw",
        },
      });
      setCurrentPage(page);
      setImages(response.data);
    }
  
  };

  return (
    <div>
      <SearchBar userSubmit={onSearchSubmit} />
      <br />
      <ImageList foundImages={images} />
      <br />
      {images.length > 0 ? (
        <button
          style={{ marginTop: "6px", marginLeft: "344px" }}
          onClick={onPageChange}
        >
          Load More
        </button>
      ) : null}
    </div>
  );
}

export default HomePage;
