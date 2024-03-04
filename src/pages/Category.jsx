import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProdcutCard from "../components/shared/ProdcutCard";

const Category = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [params.category]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${params.category}`
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
    <div className="pb-[100px]">
      <div className="w-[90%] mx-auto py-4">
        <p>
          Showing Result for {params.category}({products.length})
        </p>
      </div>
      <div className="sm:w-[90%] sm:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3">
        {products.map((item, index) => (
          <ProdcutCard key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
