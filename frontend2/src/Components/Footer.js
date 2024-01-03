import React from 'react';
import Logo from '../images/Logo_thumb.png'

function Footer() {
    return (
<footer className="footer text-center p-4 bottom-0 w-full bg-white shadow-md">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
     

        {/* Right Column for Links */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <a href="/terms.pdf" target="_blank" className="text-gray-600 text-sm hover:underline mb-1 md:mb-0">Terms & Conditions</a>
            <a href="/Privacypolicy.pdf" target="_blank" className="text-gray-600 text-sm hover:underline mb-1 md:mb-0">Privacy Policy</a>
            <a href="/contact" className="text-gray-600 text-sm hover:underline">Contact us</a>
        </div>
           {/* Left Column for Logo and Site Name */}
           <div className="mt-4 md:mb-0 flex flex-row items-center">
            <img src={Logo} alt="Logo" className="h-8 pr-3" /> {/* Replace logoPath with your logo's path */}
            <p className="text-gray-700 text-sm">
                &copy; {new Date().getFullYear()} Miglioricontideposito.it All rights reserved.
            </p>
        </div>
    </div>
</footer>


    );
}

export default Footer;
