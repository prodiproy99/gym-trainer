import React from 'react';


const Footer = () => {
    const today = new Date()
    const year = today.getFullYear();
    return (
        <footer>
            <p className='text-center p-5'><small>copyright &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;