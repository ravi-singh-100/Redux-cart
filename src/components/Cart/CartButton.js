import classes from './CartButton.module.css';
import { useDispatch} from 'react-redux';
import { uiActions } from '../store/ui-slice';
import { useSelector } from 'react-redux';
const CartButton = (props) => {
  const totalQuantity=useSelector(state=>state.cart.totalQuantity)
  const dispatch=useDispatch();
  const toggleCartHAndler=()=>{
dispatch(uiActions.toggle());
  }
  return (
    <button className={classes.button} onClick={toggleCartHAndler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
