'use client';

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="flex flex-col items-center space-y-6 mb-12">
        {/* Address */}
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="text-teal-500 text-xl" />
          <p className="text-lg">123 Music Avenue, Melody City, NY 12345</p>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-3">
          <FaPhone className="text-teal-500 text-xl" />
          <p className="text-lg">+1 (234) 567-890</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-6">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-400">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-400">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-400">
          <FaTwitter size={30} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-400">
          <FaLinkedin size={30} />
        </a>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 text-sm">
          © 2024 Music School. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
