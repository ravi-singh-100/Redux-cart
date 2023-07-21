import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
items:[],
totalQuantity:0,
cartLoad:false
    },
    reducers:{
        replaceCart(state,action){
state.totalQuantity=action.payload.totalQuantity;
state.items=action.payload.items;
state.cartLoad=false
        },
addItemToCart(state,action){
state.cartLoad=true;
    const newItem=action.payload;
    const exsistingItem=state.items.find(item=>item.id===newItem.id)
    if(!exsistingItem){
        state.items.push({
            id:newItem.id,
            price:newItem.price,
            totalPrice:newItem.price,
            quantity:1,
            name:newItem.name
        })
       
    }
    else{
        exsistingItem.totalPrice=newItem.price+exsistingItem.totalPrice;
        exsistingItem.quantity++;

        }
        state.totalQuantity++;

},
removeItemToCart(state,action){
    state.cartLoad=true;
const id=action.payload;
const exsistingItem=state.items.find((item)=>item.id===id)
if(exsistingItem.quantity===1){
state.items=state.items.filter(item=>item.id!==id)
}
else{
    exsistingItem.quantity--;
    exsistingItem.totalPrice=exsistingItem.totalPrice-exsistingItem.price
}
state.totalQuantity--;
}
    }
})





export const cartSliceActions=cartSlice.actions;
export default cartSlice;
