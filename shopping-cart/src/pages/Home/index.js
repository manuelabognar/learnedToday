import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h3>Home</h3>

      <Link to='/cart'>
        Cart
      </Link>
    </>
  );
}

export default Home;
