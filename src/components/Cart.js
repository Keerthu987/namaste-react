import { useDispatch, useSelector } from "react-redux"
import ResFoodCategList from "./ResFoodCategList"
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems);
    const dispatch=useDispatch();

    const handleClearCart=()=>{
           dispatch(clearCart())
    }
  return (
    <div className="text-center m-10 p-10">
        <button onClick={handleClearCart} className="p-2 m-2 bg-black text-white rounded-lg">
            Clear Cart
        </button>
        <h1 className="text-2xl font-medium">
            cart
        </h1>
        <div>
            {
                cartItems.length==0 && <h1>Your Cart is empty</h1>
            }
            <ResFoodCategList items={cartItems}/>
        </div>
      
    </div>
  )
}

export default Cart
