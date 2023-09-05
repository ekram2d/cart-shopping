
import React from 'react';
import { MenuData } from '../../../CustomHooks/MenuData/MenuData';
import MenuItem from '../../../Componets/MenuItem/MenuItem';
import Navbar from '../../../Componets/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';

const Home = () => {
      const { data, isLoading, error } = MenuData();
      
      return (
            <div>
                   <ToastContainer/>
                  <Navbar></Navbar>
                  <MenuItem></MenuItem>
            </div>
      );
};

export default Home;