"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: '센터소개', href: '#about' },
    { name: '프로그램', href: '#programs' },
    { name: '시설안내', href: '#facilities' },
    { name: '알림마당', href: '#news' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 bg-white ${
      isScrolled ? 'shadow-lg' : 'shadow-sm'
    }`}>
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#003d7a]">
              문화진흥센터<span className="ml-2 text-xl font-normal">나주</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-[#003d7a] transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-[#003d7a]"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-64' : 'max-h-0'
      }`}>
        <nav className="px-4 py-4 bg-white border-t">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-3 px-4 text-gray-700 hover:text-[#003d7a] hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}