export async function generateStaticParams() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
  
    return data.products.map((product) => ({
        slug: product.id.toString(),
    }));
}


export default async function ProductDetails({ params }) {
    const { slug } = params;
    
    const response = await fetch(`https://dummyjson.com/products/${slug}`);
    const products = await response.json();
    const { width, height, depth } = products.dimensions;
    const { createdAt, updatedAt, barcode, qrCode} = products.meta;

    return (
        <div className="productContainer">
            <img src={products.images[0]} alt={products.title} className="productImage" />
            <h1 className="productTitle">{products.title}</h1>
            <p className="productDescription">{products.description}</p>
            <p className="productCategory">Category: {products.category}</p>
            <p className="productPrice"><span>Price: {products.price} $</span></p>
            <p className="productNewPrice"><span>New Price: {products.discountPercentage} $</span></p>
            <p className="productRating">Rating: {products.rating}</p>
            <p className="productStock">Stock: {products.stock}</p>

            <ul className="productTags">
                {products.tags.map((tag, index) => (
                    <li key={index} className="productTag">#{tag}</li>
                ))}
            </ul>
            <p className="productBrand">Brand: {products.brand}</p>
            <p className="productSKU">SKU: {products.sku}</p>
            <p className="productWeight">Weight: {products.weight}</p>
            <p className="productDimensions">Width: {width} cm</p>
            <p className="productDimensions">Height: {height} cm</p>
            <p className="productDimensions">Depth: {depth} cm</p>

            <div className="productReviews">
                <h3 className="productReviewsTitle">Reviews:</h3>
                <ul className="productReviewsList">
                    {products.reviews.map((review, index) => (
                        <li key={index} className="productReview">
                            <p><strong>Rating:</strong> {review.rating}/5</p>
                            <p><strong>Comment:</strong> {review.comment}</p>
                            <p><strong>Date:</strong> {new Date(review.date).toLocaleDateString('en-GB')}</p>
                            <p><strong>Reviewer Name:</strong> {review.reviewerName}</p>
                            <p><strong>Reviewer Email:</strong> {review.reviewerEmail}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <p className="productWarrantyInformation">Warranty Information: {products.warrantyInformation}</p>
            <p className="productShippingInformation">Shipping Information: {products.shippingInformation}</p>
            <p className="productAvailabilityStatus">Availability Status: {products.availabilityStatus}</p>
            <p className="productReturnPolicy">Return Policy: {products.returnPolicy}</p>
            <p className="productMinimumOrderQuantity">Minimum Order Quantity: {products.minimumOrderQuantity}</p>
            <p><strong>CreatedAt:</strong> {new Date(createdAt).toLocaleDateString('en-GB')}</p>
            <p><strong>UpdateAt:</strong> {new Date(updatedAt).toLocaleDateString('en-GB')}</p>
            

            <p className="productBarcode">Barcode: {barcode}</p>
            <img src={qrCode} alt="Product QR Code" className="productQRCode" />
            <img src={products.thumbnail} alt={`${products.title} Thumbnail`} className="productThumbnail" />
        </div>
    );
}

