import SearchBar from "./SearchBar";
import React, { Component, useState } from "react";
import axios from "axios";
import ImageList from "./ImageList";

function HomePage() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const per_page = 9;

  const onSearchSubmit = async (term) => {
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
  };

  return (
    <div>
      <SearchBar userSubmit={onSearchSubmit} />
      <br />
      <ImageList foundImages={images} />
      <br />
      {images.length > 0 ? (
        <button
          style={{ marginTop: "564px", marginLeft: "644px" }}
          onClick={onPageChange}
        >
          Load More
        </button>
      ) : null}
    </div>
  );
}

export default HomePage;
