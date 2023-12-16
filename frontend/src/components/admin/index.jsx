import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../main/Navbar';

const Admin = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Admin;