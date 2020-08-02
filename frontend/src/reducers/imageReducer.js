import {
  IMAGE_INITIAL_LOAD,
  IMAGE_INITIAL_LOAD_FAILED,
} from "../Constants/constant";

function imageReducer(state = { images: [] }, action) {
  switch (action.type) {
    case IMAGE_INITIAL_LOAD:
      return { images: action.payload };
    case IMAGE_INITIAL_LOAD_FAILED:
      return { loading: false, products: action.payload };

    default:
      return state;
  }
}

export { imageReducer };
