import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getShoppingCart } from '../../utitilies/databse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Add this line


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const [orderdata, setOrderData] = useState([]);

    useEffect(() => {
        setOrderData(getShoppingCart());
    }, []);

    useEffect(() => {
        console.log(orderdata); // Logging the entire orderdata array
        console.log(orderdata.length); // Logging the length of the orderdata array
    }, [orderdata]);

    return (
        <nav className="bg-black p-4 mb-12">
            <div className="container mx-auto flex items-center justify-between ">
                <div className="text-white font-bold text-lg">
                    Brand
                </div>
                <div className="hidden sm:block">
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="text-white">Home</Link></li>
                        <li><button className='disabled'><Link to="/" className="text-white disabled">Dashboard</Link></button></li>

                        <li> <button className='disabled'>{orderdata.length > 0 ? <Link to="/order" className="text-gray-100 disabled  flex justify-center items-center">
                            <FontAwesomeIcon icon={faShoppingCart} className="mr-2 font-bold text-2xl  " />
                            <span className='font-bold text-2xl top-3  text-white rounded-xl'>{orderdata.length || 0}</span>
                        </Link> : <Link to="/" className="text-gray-100 disabled  flex justify-center items-center">
                            <FontAwesomeIcon icon={faShoppingCart} className="mr-2 font-bold text-2xl  " />
                            <span className='font-bold text-2xl top-3  text-white rounded-xl'>{orderdata.length || 0}</span>
                        </Link>}</button></li>

                    </ul>
                </div>
                <div className="sm:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    {menuOpen && (
                        <ul className="absolute top-12 right-0 bg-black text-white p-2 space-y-2 border shadow-2xl font-bold me-3">
                            <li><Link to="/" className="text-gray-100">Home</Link></li>
                            <li><button className='disabled'><Link to="/" className="text-white disabled">Dashboard</Link></button></li>

                            <li> <button className='disabled'>{orderdata.length > 0 ? <Link to="/order" className="text-gray-100 disabled  flex justify-center items-center">
                            <FontAwesomeIcon icon={faShoppingCart} className="mr-2 font-bold text-2xl  " />
                            <span className='font-bold text-2xl top-3  text-white rounded-xl'>{orderdata.length || 0}</span>
                        </Link> : <Link to="/" className="text-gray-100 disabled  flex justify-center items-center">
                            <FontAwesomeIcon icon={faShoppingCart} className="mr-2 font-bold text-2xl  " />
                            <span className='font-bold text-2xl top-3  text-white rounded-xl'>{orderdata.length || 0}</span>
                        </Link>}</button></li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
