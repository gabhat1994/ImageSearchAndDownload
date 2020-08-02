import SearchBar from "./SearchBar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageList from "./ImageList";
import { initialData, searchData } from "../actions/imageActions";
import { useDispatch, useSelector } from "react-redux";
function HomePage() {
  const dispatch = useDispatch();
  const [initialLoad, setinitialLoad] = useState(true);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentIPage, setCurrentIPage] = useState(1);
  const per_page = 9;
  const imageReducer = useSelector((state) => state.imageReducer);
  const { images } = imageReducer;
  useEffect(() => {
    if (initialLoad) {
      dispatch(initialData(currentIPage, per_page));
    }
  }, []);
  const onSearchSubmit = async (term) => {
    setinitialLoad(false);
    dispatch(searchData(currentPage, term, per_page));

    setQuery(term);
  };

  const onPageChange = async () => {
    if (initialLoad == false) {
      let page = currentPage + 1;
      dispatch(searchData(page, query, per_page));
      setCurrentPage(page);
    } else {
      let page = currentIPage + 1;
      dispatch(initialData(page, per_page));
      setCurrentIPage(page);
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
