import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import StateSlice from "./StateSlice";
import LocationSlice from "./LocationSlice";

const store = configureStore({
    reducer : {
        items : CartSlice.reducer,
        status : StateSlice.reducer,
        locationStatus : LocationSlice.reducer
    }
})

export default store;