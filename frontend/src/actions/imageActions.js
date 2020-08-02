import {
  IMAGE_INITIAL_LOAD,
  IMAGE_INITIAL_LOAD_FAILED,
  IMAGE_SEARCH_LOAD,
  IMAGE_SEARCH_LOAD_FAILED,
} from "../Constants/constant";
import axios from "axios";

const initialData = (currentIPage, per_page) => async (dispatch) => {
  try {
    const response = await axios.get("https://api.unsplash.com/photos", {
      params: { page: currentIPage, per_page: per_page },
      headers: {
        Authorization: "Client-ID o7dYoGTAAYKjip1p_dFQ6BJvbbAvLuxY6v_SDnbxsCw",
      },
    });

    dispatch({ type: IMAGE_INITIAL_LOAD, payload: response.data });
  } catch (error) {
    dispatch({ type: IMAGE_INITIAL_LOAD_FAILED, payload: [] });
  }
};

const searchData = (currentPage, term, per_page) => async (dispatch) => {
  try {
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

    dispatch({ type: IMAGE_SEARCH_LOAD, payload: response.data.results });
  } catch (error) {
    dispatch({ type: IMAGE_SEARCH_LOAD_FAILED, payload: [] });
  }
};

export { initialData, searchData };
