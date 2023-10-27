import React from 'react';
import changeNumber from "./UpDown";
import {combineReducers} from "redux";

const rootReducer = combineReducers(
{
    myReducer:changeNumber
});
export default rootReducer;

