import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#061d41] text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} StudyBetter. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/studybetter.ofc?igsh=eXNlc2prZXN5azVn&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-300 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
