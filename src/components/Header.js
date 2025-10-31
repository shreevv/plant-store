import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalItems } from '../redux/cartSlice';
import './Header.css';

function Header() {
  const totalItems = useSelector(selectTotalItems);

  return (
    <header className="header-container">
      <Link to="/products" className="header-logo">PlantParadise</Link>
      <nav className="header-nav">
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          <span role="img" aria-label="shopping cart">🛒</span>
          <span className="cart-count">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;