
import {  configureStore  } from "@reduxjs/toolkit";
import action from  "./detailesReducer";

let store = configureStore({
    reducer: {
        detailes : action
    }
})

export default store;