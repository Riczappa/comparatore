import React from 'react';

function Footer() {
    return (
        <footer className="footer white text-center p-4 bottom-0 w-full">
            <div className="container mx-auto">
                <p className="text-gray-700 text-sm">
                    &copy; {new Date().getFullYear()} Comparaconti.it All rights reserved.
                </p>
                <div className="text-gray-600 text-sm">
                    <a href="/terms.pdf" target="_blank" className="hover:underline">Terms & Conditions</a>
                </div>
                <div className="text-gray-600 text-sm">
                    <a href="/Privacypolicy.pdf" target="_blank" className="hover:underline">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
