import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import imageReducer from "./imageReducer";
import thunk from "redux-thunk";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
  imagesList: imageReducer,
  app: appReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
