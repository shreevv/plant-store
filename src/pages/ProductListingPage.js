import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, selectItemIdsInCart } from '../redux/cartSlice';
import { products } from '../data/products';
import './ProductListingPage.css';

function ProductListingPage() {
  const dispatch = useDispatch();
  const itemIdsInCart = useSelector(selectItemIdsInCart);

  // Group products by category
  const categories = products.reduce((acc, product) => {
    (acc[product.category] = acc[product.category] || []).push(product);
    return acc;
  }, {});

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="page-container">
      {Object.entries(categories).map(([category, items]) => (
        <section key={category} className="category-section">
          <h2>{category}</h2>
          <div className="product-grid">
            {items.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={itemIdsInCart.includes(product.id)}
                >
                  {itemIdsInCart.includes(product.id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductListingPage;