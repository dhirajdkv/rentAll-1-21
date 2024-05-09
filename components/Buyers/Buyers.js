
// src/components/buyers.js
import React, { useState } from 'react';
import './Buyers.css';

const ProductGrid = () => {
  const [selectedType, setSelectedType] = useState('All');
  const products = [
    { id: 1, name: 'Nike Shoes', type: 'Clothing', price: 100, color: '#dc143c' },
    { id: 2, name: 'Sony TV', type: 'Electronics', price: 400, color: '#5f9ea0' },
    { id: 3, name: 'iPhone', type: 'Mobile', price: 800, color: '#d2691e' },
    { id: 4, name: 'PS5', type: 'Gaming', price: 500, color: '#ff69b4' },
    // Add more products as needed
  ];

  const filteredProducts = products.filter(
    (product) => selectedType === 'All' || product.type === selectedType
  );

  return (
    <div  style={{ padding: '20px' }}>
      <div className="container-content" style={{ marginBottom: '10px' }}>
        <label>Product Type: </label>
        <select onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Mobile">Mobile</option>
          <option value="Clothing">Clothing</option>
          <option value="Gaming">Gaming</option>
        </select>
      </div>
      <div class="items" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ padding: '10px', backgroundColor: product.color, borderRadius: '10px', width: '150px' }}>
            <img src="https://via.placeholder.com/100" alt={product.name} style={{ display: 'block', margin: '0 auto' }} />
            <p>{product.name}</p>
            <p>Price: ${product.price}</p>
            <button class="rentbtn">Rent Now</button>
          </div>
        ))}
      </div>
      <div class="items" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ padding: '10px', backgroundColor: product.color, borderRadius: '10px', width: '150px' }}>
            <img src="https://via.placeholder.com/100" alt={product.name} style={{ display: 'block', margin: '0 auto' }} />
            <p>{product.name}</p>
            <p>Price: ${product.price}</p>
            <button class="rentbtn">Rent Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
