import { useSelector,useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect,Fragment } from 'react';
// import { uiActions } from './components/store/ui-slice';
import Notification from './components/UI/Notification'
import { sendingCartData,fetchData } from './components/store/cart-actions';

let initial=true;
function App() {
  const isCartVisible=useSelector((state)=>state.ui.isCartVisible)
  const notification=useSelector((state)=>state.ui.notification)
  const dispatch=useDispatch();
  const cart=useSelector((state)=>state.cart);
  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])
  useEffect(()=>{
//     const sendingCartData=async()=>{
//       dispatch(uiActions.showNotification({
//         message:'sending cacrt data',
//         title:'sending...',
//         status:'pending'
//       }))
//      const response=await fetch('https://redux-cart-879fd-default-rtdb.firebaseio.com/cart.json',{
//         method:'PUT',
//         body:JSON.stringify(cart),
//         // headers:headers/application
//       })
//       if(!response.ok)
// {
//   dispatch(uiActions.showNotification({
//     message:'sending cacrt data failed',
//     title:'Error',
//     status:'error'
//   }))
// }     
// dispatch(uiActions.showNotification({
//   message:'Success',
//   title:'sent the cart data successfully',
//   status:'success'
// }))
//     }
//     if(initial){
//       initial=false;
//       return;
//     }
//   sendingCartData().catch((error)=>{
//     dispatch(uiActions.showNotification({
//       message:'sending cacrt data failed',
//       title:'Error',
//       status:'error'
//     }))
//   })
if(initial){
  initial=false;
  return;
}if(cart.cartLoad){
  dispatch(sendingCartData(cart))
}

  },[cart,dispatch])
  return (
    <Fragment>
     {notification&& <Notification status={notification.status} message={notification.message} title={notification.title}></Notification>}
    <Layout>
     {isCartVisible&&<Cart />} 
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
