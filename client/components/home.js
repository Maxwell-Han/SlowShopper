import React from 'react';
import {Link} from 'react-router-dom';

/**
 * COMPONENT
 */
const Home = () => {
  return (
    <div>
      <h1 className="main">Welcome to The Slow Shopper</h1>
      <Link to="/products" style={{textDecoration: 'none'}}>
        <h2 className="sub">
          Check out our comprehensive line of sloth products
        </h2>
      </Link>
      <div className="cardsi">
        <Link to="/products">
          <img src="/img/leaf.jpg" />
        </Link>
      </div>
      <div>
        <Link
          to="/products?category=Coronavirus"
          style={{textDecoration: 'none'}}
        />
      </div>
    </div>
  );
};

export default Home;
