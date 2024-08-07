import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
import companyLogo from "../assets/LogoRm.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll-based changes if necessary
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'Social Media', path: 'services' },
    { link: 'About', path: 'about' },
    { link: 'Testimonial', path: 'newsletter' },
    { link: 'Our Team', path: 'blog' },
    { link: 'FAQ', path: 'footer' }
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0 shadow-lg bg-gradient-to-r from-pink-500 to-purple-600 z-50">
      <nav className="py-0 lg:px-14 px-4">
        <div className="flex justify-between items-center p-4">
          <div>
            <Link to="home" smooth={true} duration={500} className="text-2xl font-semibold flex items-center space-x-3 cursor-pointer">
              <img src={companyLogo} alt="" className="w-20 inline-block items-center" />
              <span className="text-white">ZORRO</span>
            </Link>
          </div>

          {/* Nav items for large screens */}
          <ul className="lg:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  smooth={true}
                  duration={500}
                  className="block text-base text-white hover:text-pink-200 font-medium transition-colors duration-300 cursor-pointer"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Buttons for large and medium devices */}
          <div className="hidden lg:flex space-x-4 items-center">
            <a href="/" className="text-white hover:text-pink-200 transition-colors duration-300">
              Login
            </a>
            <button className="bg-white text-purple-600 py-2 px-4 transition-all duration-300 rounded hover:bg-pink-200 hover:text-purple-700">
              Sign Up
            </button>
          </div>

          {/* Menu bar for mobile and medium devices */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-pink-200"
            >
              {isMenuOpen ? (
                <FaTimes className='h-6 w-6' />
              ) : (
                <FaBars className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile and medium-sized menu */}
        <div className={`lg:hidden fixed top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 transition-transform transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} duration-300 ease-in-out z-60`}>
          <div className="flex flex-col items-center relative">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white hover:text-pink-200 transition-colors duration-300"
            >
              <FaTimes className='h-6 w-6' />
            </button>
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                smooth={true}
                duration={500}
                className="block py-2 text-lg text-white hover:text-pink-200 transition-colors duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                {link}
              </Link>
            ))}
            {/* Mobile Buttons */}
            <div className="mt-4">
              <a href="/" className="block text-center text-white hover:text-pink-200 mb-2 transition-colors duration-300">
                Login
              </a>
              <button className="block bg-white text-purple-600 py-2 px-4 transition-all duration-300 rounded hover:bg-pink-200 hover:text-purple-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;