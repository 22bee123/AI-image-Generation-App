import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const path = location.pathname.split('/');

    return (
        <>
            {path[1] === "post" ? 
            (
                <div className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono mx-4'>
                    <h1>GenAI</h1>
                    <Link to="/">Explore Post</Link>
                </div>
            )
            : 
            (
                <div className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono mx-4'>
                    <h1>GenAI</h1>
                    <Link to="/post">Create a new Post</Link>
                </div>
            )}
        </>
    );
};

export default Navbar;
