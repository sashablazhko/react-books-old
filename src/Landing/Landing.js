import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing">
      <h1>DAD*DAD</h1>
      <input type="text" placeholder="Search" />
      <Link to="/search">or Browse All</Link>
    </div>
  );
};

export default Landing;
