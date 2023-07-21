
import cartSlice from './cart-slice';
import uiSlice from './ui-slice';
import {configureStore} from '@reduxjs/toolkit'
const store=configureStore({
    reducer:{
        ui:uiSlice.reducer,
        cart:cartSlice.reducer
    }
})


export default store;