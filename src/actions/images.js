import axios from "axios";
import { setCurrentImage, setImages } from "../reducers/imageReducer";
import { ACCES_KEY } from "../config/config.js";
import { hideLoader, showLoader } from "../reducers/appReducer";

const BASE_PATH = `https://api.unsplash.com/`;
const SEARCH_PATH = `search/photos`;
const PHOTOS = `photos/`;

export const getImages = (searchQuery, limit = 16) => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      let URL = BASE_PATH + SEARCH_PATH;
      const response = await axios.get(URL, {
        params: { query: searchQuery, per_page: limit },
        headers: { Authorization: `Client-ID ${ACCES_KEY}` },
      });

      await dispatch(setImages(response.data.results));
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      dispatch(hideLoader());
    }
  };
};

//https://api.unsplash.com/photos/I7oLRdM9YIw

export const getOneImage = (id) => {
  return async (dispatch) => {
    try {
      let URL = `${BASE_PATH}${PHOTOS}${id}`;
      const response = await axios.get(URL, {
        headers: { Authorization: `Client-ID ${ACCES_KEY}` },
      });

      await dispatch(setCurrentImage(response.data));
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
