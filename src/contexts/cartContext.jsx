import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const cartContext = createContext();

export const useCart = () => {
  return useContext(cartContext);
};

function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
    toast.success(`${item.title} added to cart`);
  };

  const removeItem = (item) => {
    let updatedProducts = items;
    updatedProducts = updatedProducts.filter((i) => i.id !== item.id);
    setItems(updatedProducts);
    toast.success(`${item.title} removed from cart`);
  };

  return (
    <cartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
