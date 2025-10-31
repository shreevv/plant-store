import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  incrementItem,
  decrementItem,
  removeItem,
  selectCartItems,
  selectTotalItems,
  selectTotalCost,
} from '../redux/cartSlice';
import './ShoppingCartPage.css';

function ShoppingCartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const totalCost = useSelector(selectTotalCost);

  const handleCheckout = () => {
    // Displays the message "Coming Soon"
    alert('Checkout feature is coming soon!');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty.</h2>
        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      <div className="cart-summary">
        <h3>Total Plants: {totalItems}</h3>
        <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
      </div>
      
      <div className="cart-items-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => dispatch(decrementItem(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
            </div>
            <button className="delete-btn" onClick={() => dispatch(removeItem(item.id))}>
              Delete
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-footer">
        <Link to="/products">
          <button className="continue-shopping-btn">Continue Shopping</button>
        </Link>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default ShoppingCartPage;