import {
  IMAGE_INITIAL_LOAD,
} from "../Constants/constant";

function imageReducer(state = { images: [] }, action) {
  switch (action.type) {
    case IMAGE_INITIAL_LOAD:
      return { images: action.payload };
    default:
      return state;
  }
}

export { imageReducer };
