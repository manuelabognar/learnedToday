import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  
  return(
    <div>
      <div>
        <Link to="/signin">Sign In</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
      <div>
        <Link to="/userdata">User Data</Link>
      </div>
    </div>
  );
}