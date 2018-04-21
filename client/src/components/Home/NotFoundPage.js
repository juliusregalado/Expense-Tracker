import React from 'react';
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
  <div>
    <h3>Sorry page not found</h3>
    <Link to='/'>Click here to go home</Link>
  </div>
)

export default NotFoundPage;
