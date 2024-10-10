'use client'
import ProductCard from "../../Components/product/ProductCard";
import { useEffect, useState } from "react";
const Products = () => {
  const [list, setList] = useState([]);
  


  const productsUrl = "https://dummyjson.com/products";

  useEffect(() => {
    async function fetchProducts() {
      try {
       
        const response = await fetch(productsUrl);
        const data = await response.json();
        setList(data.products);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h1>Products</h1>
      <div className="grid">
        {list.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
