import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-blue-400 text-white py-6">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <FaFacebook className="inline-block mx-2 text-xl hover:text-blue-500" />
                    <FaTwitter className="inline-block mx-2 text-xl hover:text-blue-500" />
                    <FaInstagram className="inline-block mx-2 text-xl hover:text-blue-500" />
                </div>
                <p className="text-sm">© 2024 WeatherDekho.com. All rights reserved.</p>
            </div>
        </footer>
    );
}
