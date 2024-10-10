import React from "react";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link href={`/products/${product.id}`}>
        <img src={product.images[0]} alt={product.title} />
        <h2 className="product-title">{product.name}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">${product.description}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
