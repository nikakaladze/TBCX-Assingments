import React from 'react';

const list = [
    {
        id: '10001',
        name: 'პერანგი',
        description: 'საუკეთესო ხარისხის პერანგი',
        price: 14.99,
        currency: 'USD',
        imageURL: 'https://example.com/images/product-10001.jpg',
    },
    {
        id: '10002',
        name: 'ჯინსი',
        description: 'ორიგინალი ჯინსი ამერიკიდან.',
        price: 12.99,
        currency: 'USD',
        imageURL: 'https://example.com/images/product-10002.jpg',
    },
    {
        id: '10003',
        name: 'მაისურები',
        description: 'საუკეთესო ხარისხის მაისურები',
        price: 3.99,
        currency: 'USD',
        imageURL: 'https://example.com/images/product-10003.jpg',
    },
    {
        id: '10004',
        name: 'ფეხსაცმელი',
        description: '100 პროცენტი ტყავი',
        price: 79.99,
        currency: 'USD',
        imageURL: 'https://example.com/images/product-10004.jpg',
    },
];

const ProductTableAsssignments3 = () => {
    return (
        <>
            <div className='container'>

                <div className="assignmentsWrapper">

                    <h2>Product List</h2>
                    <table border="1" cellPadding="10" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Currency</th>
                                <th>ImageUrl</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.currency}</td>
                                    <td>{product.imageURL}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ProductTableAsssignments3;
