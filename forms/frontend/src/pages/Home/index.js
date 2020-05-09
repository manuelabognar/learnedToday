import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  
  return(
    <section>
      <h1>Home</h1> 
      <Link to="/signin">Sign In</Link>
      <Link to="/register">Register</Link>
      <Link to="/userdata">User Data</Link>
    </section>
  );
}