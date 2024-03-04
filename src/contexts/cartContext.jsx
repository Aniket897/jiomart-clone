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

  const removeItem = (item) => {
    let updatedProducts = items;
    updatedProducts = updatedProducts.filter((i) => i.id !== item.id);
    setItems(updatedProducts);
  };

  return (
    <cartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
