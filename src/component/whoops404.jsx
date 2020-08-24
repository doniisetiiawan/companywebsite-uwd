import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Whoops404() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="whoops-404">
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}
