import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Section from "../Section";
import ProductsSlider from "../ProductsSlider";

const TopElectronics = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/electronics"
      );
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading.....</p>;
  }

  if (error) {
    return <p>Error....</p>;
  }
  return (
    <Section title={"Top products in Electronics"}>
      <div className="w-[95%] mx-auto">
        <ProductsSlider products={products} />
      </div>
    </Section>
  );
};

export default TopElectronics;
