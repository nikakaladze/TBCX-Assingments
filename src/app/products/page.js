// This is an async server component in the app router
import ProductCard from "../../Components/product/ProductCard";

// Server-side fetching directly in the component
const Products = async () => {
  const productsUrl = "https://dummyjson.com/products";

  let products = [];

  try {
    const response = await fetch(productsUrl);
    const data = await response.json();
    products = data.products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <div className="product-list">
      <h1>Products</h1>
      <div className="grid">
        {products.length > 0 ? (
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
