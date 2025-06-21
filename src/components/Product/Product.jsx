import React, { useEffect, useState } from 'react';

function Products({ category }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8088/istanbul-alyans-api/get_products.php?category=${category}`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error('API hatası:', err));
    }, [category]);

    return (
        <div>
            <h2>{category} ürünleri</h2>
            <ul>
                {products.length > 0 ? (
                    products.map(prod => (
                        <li key={prod.id}>
                            <img src={prod.image} alt={prod.category} style={{ width: 100 }} />
                        </li>
                    ))
                ) : (
                    <p>Ürün bulunamadı.</p>
                )}
            </ul>
        </div>
    );
}

export default Products;
