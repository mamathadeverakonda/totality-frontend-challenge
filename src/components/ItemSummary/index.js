import CartContext from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

import "./index.css";


const ItemSummary = () => {
  const navigate = useNavigate();

  return (
  <CartContext.Consumer>
    {(value) => {
      const { cartList } = value;
      let total = 0;

      cartList.forEach((eachCartItem) => {
        total += eachCartItem.price;
      });

      const count = cartList.length;

      const checkoutPro = () => {
        // Use the navigate hook to change routes
        navigate("/");
      };

      return (
        <div className="align-summary">
          <div className="summary">
            <h1>
              Total amount: <span>Rs{total}/- </span>
            </h1>
            <p className="para">{count} items in cart</p>
            <button type="button" className="che-btn" onClick={checkoutPro}>
              Checkout
            </button>
          </div>
        </div>
      );
    }}
  </CartContext.Consumer>
)
};
export default ItemSummary;