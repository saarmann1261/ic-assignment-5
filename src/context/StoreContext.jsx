import { createContext, useState } from "react";
import { products } from "../data/ProductData";

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext();

export default function StoreProvider({ children }) {

  
 
  const [cart, setCart] = useState([]);
    function handleCartAction(product, isInCart) {
   
    if (!isInCart) {
      console.log(product.id);

      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    } else {
      const newCart = cart.filter((cartItem) => cartItem.id !== product.id);
      setCart(newCart);
    }
  }

  return (
    <StoreContext.Provider value={{ products, cart, setCart,handleCartAction }}>
      {children}
    </StoreContext.Provider>
  );
}
