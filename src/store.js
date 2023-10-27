import { legacy_createStore as createStore } from 'redux';
import rootReducer from "./reducers";
import React from "react";
debugger
const store = createStore(rootReducer);

export default store;