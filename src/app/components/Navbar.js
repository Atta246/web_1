'use client';

import { useTheme } from '../context/ThemeContext';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);  return (
    <nav className="glass backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center animate-fadeIn">
              <span className="text-2xl font-black text-gradient-primary">Delicious</span>
            </Link>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-12">              {[
                { name: 'Home', href: '/', delay: 'animation-delay-150' },
                { name: 'Menu', href: '/menu', delay: 'animation-delay-300' },
                { name: 'Reservation', href: '/reservation', delay: 'animation-delay-500' },
                { name: 'Contact', href: '/contact', delay: 'animation-delay-300' },
              ].map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className={`${item.delay} animate-fadeIn border-transparent text-gray-700 dark:text-gray-200 hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-300 relative group`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center animation-delay-300 animate-fadeIn">
            <button 
              onClick={toggleTheme} 
              aria-label="Toggle dark mode"
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 9.003 0 0012 21a9.003 9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-300 hover:bg-white/80 dark:hover:bg-gray-800/80 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 shadow-md hover:shadow-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden animate-scaleIn">
          <div className="pt-2 pb-3 space-y-1 mx-2 my-2 rounded-2xl overflow-hidden backdrop-blur-lg bg-white/90 dark:bg-gray-800/90 shadow-lg border border-gray-200/30 dark:border-gray-700/30">            {[
              { name: 'Home', href: '/', delay: 'animation-delay-150', active: true },
              { name: 'Menu', href: '/menu', delay: 'animation-delay-300', active: false },
              { name: 'Reservation', href: '/reservation', delay: 'animation-delay-500', active: false },
              { name: 'Contact', href: '/contact', delay: 'animation-delay-300', active: false },
            ].map((item, index) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`${item.delay} animate-fadeIn ${item.active 
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border-l-4 border-indigo-500 text-indigo-700 dark:text-indigo-300' 
                  : 'border-transparent border-l-4 text-gray-700 dark:text-gray-200 hover:bg-gray-50/80 dark:hover:bg-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600'
                } block pl-3 pr-4 py-3 text-base font-medium transition-all duration-200`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200/30 dark:border-gray-700/30 mt-2">
              <span className="text-gray-700 dark:text-gray-200 font-medium">
                {darkMode ? 'Dark Mode' : 'Light Mode'}
              </span>
              <button 
                onClick={toggleTheme}
                aria-label="Toggle dark mode" 
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 bg-white/80 dark:bg-gray-700/80 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300"
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 9.003 0 0012 21a9.003 9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
