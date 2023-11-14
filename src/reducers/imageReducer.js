const SET_IMAGES = "SET_IMAGES";
const SET_MODAL = "SET_MODAL";
const SET_MODAL_CONTENT = "SET_MODAL_CONTENT";
const SET_CURRENT_IMAGE = "SET_CURRENT_IMAGE";

const defaultState = {
  images: [],
  modalDisplay: "none",
  modalContent: [],
};

export default function imageReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_IMAGES:
      return { ...state, images: action.payload };
    case SET_MODAL:
      return { ...state, modalDisplay: action.payload };
    case SET_MODAL_CONTENT:
      return { ...state, modalContent: action.payload };
    case SET_CURRENT_IMAGE:
      return { ...state, currentImage: action.payload };
    default:
      return state;
  }
}

export const setImages = (images) => ({
  type: SET_IMAGES,
  payload: images,
});
export const setCurrentImage = (image) => ({
  type: SET_CURRENT_IMAGE,
  payload: image,
});

export const setModal = (display) => ({
  type: SET_MODAL,
  payload: display,
});

export const setModalContent = (data) => ({
  type: SET_MODAL_CONTENT,
  payload: data,
});
