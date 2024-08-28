import React from 'react';
import { Link } from 'react-router-dom';

export default function Middlepage() {
  return (
    <div className="text-center">
      <h1 className="main-title home-page-title">your vote be submitted!</h1>
      <Link to="/View">
        <button className="primary-button">View and Voting</button>
      </Link>
    </div>
  );
}