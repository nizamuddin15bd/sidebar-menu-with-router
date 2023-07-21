import React, { Children } from 'react';
import { NavLink } from 'react-router-dom';
// import {
//     FaTh,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,
//     FaThList
// } from "react-icon/fa"

const Sidebar = ({ children }) => {
    const menuItem = [
        {
            path: '/',
            name: 'Dashboard',
        },
        {
            path: '/about',
            name: 'About',

        },
        {
            path: '/analytics',
            name: 'Analytics',

        },
        {
            path: '/comment',
            name: 'Comment',

        },
        {
            path: '/product',
            name: 'Product',

        },
        {
            path: '/productList',
            name: 'Product List',

        },
    ]
    return (
        <div className='flex'>
            <div className='h-screen bg-black w-64 fixed'>
                <h1 className='text-white pb-10 text-center mt-5 font-bold text-lg '><span className='text-sky-400'>Nizam</span> uddin</h1>
                <div className=''>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index}>
                                <div className='font-medium pl-4 pb-1.5 text-white  delay-100 hover:bg-sky-300 hover:text-black'> {item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
            <index className='w-full ml-72'>{children}</index>
        </div>
    );
};

export default Sidebar;