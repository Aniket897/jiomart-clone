import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const useCart = () => {
  return useContext(cartContext);
};

function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <cartContext.Provider value={{ items, addItem }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
