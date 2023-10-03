// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Intro from './Intro';
import Basic from './Basic';

const DjangoRoutes = () => (
  <Routes>
    <Route path='/intro' element={<Intro />} />
    <Route path='/basic' element={<Basic />} />
    {/* Add more routes for other pages as needed */}
  </Routes>
);

export default DjangoRoutes;





