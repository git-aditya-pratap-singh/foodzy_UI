import {createSlice} from "@reduxjs/toolkit";

// Change (Edit Address) State update

const StateSlice = createSlice({
    name : "stateData",
    initialState : {
        data : false,
        forgetCross : false,
        userCross : false,
        paymentCross : false
    },
    reducers : {
        
        // Change Edit Address function-----
        CheckState : (state, action)=>{
          state.data = action.payload;
        },

        // To check forget Password cross(x) state (true or false)
        ForgetState : (state, action)=>{
            state.forgetCross = action.payload;
        },

        //To Check User Update Details cross(x) state (true or false)
        UserState : (state, action)=>{
            state.userCross = action.payload;
        },

        //To Check Payment (pay now) option State (true or false)
        PaymentState : (state, action)=>{
            state.paymentCross = action.payload;
        }
    }
})
export default StateSlice;
export const {CheckState, ForgetState, ResetState, UserState, PaymentState} = StateSlice.actions;