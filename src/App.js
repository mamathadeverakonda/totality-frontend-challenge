import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Component } from "react";

import Login from "./components/Login";
import PropertyList from "./components/PropertyList";
import CartListItems from "./components/CartListItems";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import CartContext from "./context/CartContext";

class App extends Component {
  state = {
    cartList: [],
  };

  addCartProperty = (item) => {
    this.setState((prevState) => ({ cartList: [...prevState.cartList, item] }));
  };

  removeCartProperty = (id) => {
    const { cartList } = this.state;
    const updatedCartItems = cartList.filter(
      (eachCartItem) => eachCartItem.id !== id
    );
    this.setState({ cartList: updatedCartItems });
  };

  render() {
    const { cartList } = this.state;

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartProperty: this.addCartProperty,
          removeCartProperty: this.removeCartProperty,
        }}
      >
        <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute><PropertyList /></ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute><CartListItems /></ProtectedRoute>} />
        </Routes>
        </Router>
      </CartContext.Provider>
    );
  }
}

export default App;