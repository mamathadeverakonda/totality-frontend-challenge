import CartContext from "../../context/CartContext";
import ItemSummary from "../ItemSummary";
import CartItems from "../CartItems";
import "./index.css";

const CartListItems = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartList } = value;

      return (
        <div className="cont">
          <h1 className="main-head">My cart</h1>
          <ul className="cart-list">
            {cartList.map((eachCartItem) => (
              <CartItems key={eachCartItem.id} eachCartItem={eachCartItem} />
            ))}
          </ul>

          <ItemSummary />
        </div>
      );
    }}
  </CartContext.Consumer>
);

export default CartListItems;