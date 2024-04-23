import {createSlice} from "@reduxjs/toolkit";
const LocationSlice = createSlice({
    name : "find_out_location",
    initialState : {
        findlocation : {
            latitude : 13.042155, 
            longitude : 77.568379
        } 
    },

    reducers : {
        FindLocation : (state, action)=>{
            state.findlocation = action.payload;   
        }
    }
})

export default LocationSlice;
export const { FindLocation } = LocationSlice.actions;
