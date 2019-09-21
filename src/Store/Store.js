import { createStore, combineReducers } from "redux";
import ChipItemReducer from "../Reducers/ChipItemReducer";
export default createStore(
  combineReducers({ChipItemReducer }),
  {}
);
