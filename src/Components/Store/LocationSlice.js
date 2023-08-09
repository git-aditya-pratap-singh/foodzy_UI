import {createSlice} from "@reduxjs/toolkit";
const LocationSlice = createSlice({
    name : "find_out_location",
    initialState : {
        findlocation : {
            latitude : 28.6139, 
            longitude : 77.2090
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