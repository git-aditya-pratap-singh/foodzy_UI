import {createSlice} from "@reduxjs/toolkit";

// Change (Edit Address) State update

const StateSlice = createSlice({
    name : "stateData",
    initialState : {
        data : false,
        forgetCross : false,
        resetCross : false,
        userCross : false
    },
    reducers : {
        
        // Change Edit Address function-----
        CheckState : (state, action)=>{
          //console.log(action.payload);
          state.data = action.payload;
          
        },

        // To check forget Password cross(x) state (true or false)
        ForgetState : (state, action)=>{
            state.forgetCross = action.payload;
        },

        // To check reset password cross(x) state (true or false)
        ResetState : (state, action)=>{
            state.resetCross = action.payload;
        },

        //To Check User Update Details cross(x) state (true or false)
        UserState : (state, action)=>{
            state.userCross = action.payload;
        }

    }
})
export default StateSlice;
export const {CheckState, ForgetState, ResetState, UserState} = StateSlice.actions;