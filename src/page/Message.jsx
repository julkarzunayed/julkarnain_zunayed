import React from 'react';
import { Link } from 'react-router';

const Message = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <h1 className='text-6xl text-center'>Message</h1>
        </div>
    );
};

export default Message;