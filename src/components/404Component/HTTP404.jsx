import React from 'react';
import { Link } from 'react-router-dom';
import "./HTTP404.css"

function HTTP404() {
  return (
    <div>
      <h1>404</h1>
      <Link to="/popular">Return Home</Link>
    </div>
  )
}

export default HTTP404;