import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducer";

const appStore = configureStore({
    reducer : {
        data : dataReducer
    } 
})

export default appStore;