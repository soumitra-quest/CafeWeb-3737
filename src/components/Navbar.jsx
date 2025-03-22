import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-serif text-brown-800">Café Aroma</Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLinks />
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <NavLinks mobile />
          </div>
        </motion.div>
      )}
    </nav>
  );
}

const NavLinks = ({ mobile }) => {
  const baseStyles = "text-gray-700 hover:text-brown-600 transition-colors duration-200";
  const mobileStyles = "block px-3 py-2 text-base font-medium";
  const desktopStyles = "text-sm font-medium";

  return (
    <>
      <Link to="/" className={`${baseStyles} ${mobile ? mobileStyles : desktopStyles}`}>Home</Link>
      <Link to="/menu" className={`${baseStyles} ${mobile ? mobileStyles : desktopStyles}`}>Menu</Link>
      <Link to="/about" className={`${baseStyles} ${mobile ? mobileStyles : desktopStyles}`}>About</Link>
      <Link to="/contact" className={`${baseStyles} ${mobile ? mobileStyles : desktopStyles}`}>Contact</Link>
    </>
  );
};