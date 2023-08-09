import {createSlice} from "@reduxjs/toolkit";
const CartSlice = createSlice({
    name : "cart",
    initialState : {
        data : []
    },
    reducers : {
        addItem : (state, action)=>{
            state.data.push(action.payload);
        },

        removeItem : (state,action)=>{
            state.data = state.data.filter((items) => items.id !== action.payload.id);
        },

        clearItem : (state,action)=>{

        },

        increaseCount : (state, action)=>{
            state.data = state.data.map((item)=>{
                if(item.id === action.payload.id){
                  item.count++;
                  item.payment = (item.price * item.count);
                }
                return item
            });
        },

        decreaseCount : (state, action)=>{
            state.data = state.data.map((item,index)=>{
                if(item.id === action.payload.id && item.count>=1){
                    item.count--;
                    item.payment = (item.price * item.count);
                } 
            return item  
            })
        },
    }
}) 

export default CartSlice;
export const {addItem, removeItem, clearItem, increaseCount, decreaseCount} = CartSlice.actions;