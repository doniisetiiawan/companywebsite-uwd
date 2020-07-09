import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">[About]</Link>
        <Link to="events">[Events]</Link>
        <Link to="products">[Products]</Link>
        <Link to="contact">[Contact Us]</Link>
      </nav>
    </div>
  );
}
