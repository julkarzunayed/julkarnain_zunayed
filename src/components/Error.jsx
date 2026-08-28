import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <h1 className='text-6xl'>Error </h1>
        </div>
    );
};

export default Error;