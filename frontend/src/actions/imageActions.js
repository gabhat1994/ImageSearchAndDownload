import {
  IMAGE_INITIAL_LOAD,
  IMAGE_INITIAL_LOAD_FAILED,
} from "../Constants/constant";
import axios from "axios";
const initialData = (currentIPage) => async (dispatch) => {
  try {
    const response = await axios.get("https://api.unsplash.com/photos", {
      params: { page: currentIPage, per_page: 9 },
      headers: {
        Authorization: "Client-ID o7dYoGTAAYKjip1p_dFQ6BJvbbAvLuxY6v_SDnbxsCw",
      },
    });

    dispatch({ type: IMAGE_INITIAL_LOAD, payload: response.data });
  } catch (error) {
    dispatch({ type: IMAGE_INITIAL_LOAD_FAILED, payload: null });
  }
};

export { initialData };
