import { uiActions } from "./ui-slice"
import { cartSliceActions } from "./cart-slice"
export const fetchData=()=>{
    return async(dispatch)=>{
const fetching=async ()=>{
    const response= await fetch('https://redux-cart-879fd-default-rtdb.firebaseio.com/cart.json');
    if(!response.ok){
        throw new Error('could not fetch cart data')
    }
    const data=await response.json();
return data;
}
try{
   const cartData= await fetching();
   dispatch(cartSliceActions.replaceCart({
    items:cartData.items||[],
    totalQuantity:cartData.totalQuantity
   }))
}
catch(error){
    dispatch(uiActions.showNotification({
        message:'fetcing cart data failed',
        title:'Error',
        status:'error'
      }))
}
    }
}


export const sendingCartData=(cart)=>{
    return async(dispatch)=>{
    dispatch(uiActions.showNotification({
      message:'sending cacrt data',
      title:'sending...',
      status:'pending'
    }))
    const sendReq= async()=>{
        const response=await fetch('https://redux-cart-879fd-default-rtdb.firebaseio.com/cart.json',{
            method:'PUT',
            body:JSON.stringify({items:cart.items,totalQuantity:cart.totalQuantity}),
            // headers:headers/application
          })
          if(!response.ok)
          {
            throw new Error('Sending data failed')
          }
    }
  try{
    await sendReq();
    dispatch(uiActions.showNotification({
        message:'Success',
        title:'sent the cart data successfully',
        status:'success'
        }))
  }
  catch(error){
    dispatch(uiActions.showNotification({
        message:'sending cacrt data failed',
        title:'Error',
        status:'error'
      }))
  }


}     

  }