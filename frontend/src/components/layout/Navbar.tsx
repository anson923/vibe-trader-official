import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                            VibeSocial
                        </a>
                    </div>

                    {/* Search Bar - Hidden on mobile */}
                    <div className="hidden md:block flex-grow max-w-md mx-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-2.5"
                                aria-label="Search"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Profile Button */}
                    <div className="hidden md:flex items-center">
                        <a
                            href="/profile"
                            className="flex items-center text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                            aria-label="Profile"
                            tabIndex={0}
                        >
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                                alt="Profile"
                                className="w-8 h-8 rounded-full"
                            />
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-200"
                            aria-expanded={isMenuOpen}
                            onClick={toggleMenu}
                            aria-label="Open main menu"
                            tabIndex={0}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg dark:bg-gray-900">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <div className="py-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200"
                            />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;