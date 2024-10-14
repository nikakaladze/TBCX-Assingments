'use client'
import React, { useState, useEffect } from "react";
import ProductCard from "../../Components/product/ProductCard";
// import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(false);

  // debounce ფუნქცია
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  // პროდუქტების სიის გამოძახება API-დან
  const fetchProducts = async (searchTerm = "", sortBy = "title", sortOrder = "asc") => {
    setLoading(true);
    const productsUrl = `https://dummyjson.com/products/search?q=${searchTerm}&sortBy=${sortBy}&sortOrder=${sortOrder}`;

    try {
      const response = await fetch(productsUrl);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  // ძებნის ღირებულების ცვლილების დამუშავება
  const handleSearch = debounce((value) => {
    setSearchTerm(value);
  }, 500); // 500 მილიწამი სიფრთხილის ფუნქციისთვის (debounce)

  // საწყისი მონაცემების ჩატვირთვა
  useEffect(() => {
    fetchProducts(searchTerm, sortBy, sortOrder);
  }, [searchTerm, sortBy, sortOrder]);

  return (
    <div className="product-list">
      <h1>Products</h1>
      <div className="filter-options">
        <input
          type="text"
          placeholder="Search Products..."
          className="search-input"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="sort-controls">
          <label>Sort By: </label>
          <select
            className="sort-dropdown"
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
          >
            <option value="title">Title</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>

          <button className="sort-button" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
            {sortOrder === "asc" ? "Sort Descending" : "Sort Ascending"}
          </button>
        </div>
      </div>

      <div className="grid">
        {loading ? (
          <p>Loading...</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Products;
