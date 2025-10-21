// src/components/Footer.jsx
import React from "react";
import { FaInstagram } from "react-icons/fa";
 
const Footer = () => (
  <footer className="bg-[#061d41] text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm mb-4">
        © {new Date().getFullYear()} StudyBetter. Todos os direitos reservados.
      </p>
 
      <a
        href="https://www.instagram.com/studybetter.ofc?igsh=eXNlc2prZXN5azVn&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-white hover:text-indigo-300 transition"
        aria-label="Instagram"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  </footer>
);
 
export default Footer;