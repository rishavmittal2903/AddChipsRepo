import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./Store/Store";
import  "./Css/styles.css";
import ChipList from "./Components/ChipListComponent";
ReactDOM.render(
  <Provider store={store} key="storeKey">
    <ChipList />
  </Provider>,
  document.getElementById("root")
);
