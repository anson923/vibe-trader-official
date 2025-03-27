import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {
    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50">
            <div className="flex items-center justify-around h-16">
                <Link
                    to="/"
                    className="flex flex-col items-center justify-center flex-1 h-full text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors"
                    aria-label="Home"
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
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                    <span className="text-xs mt-1">Home</span>
                </Link>

                <Link
                    to="/search"
                    className="flex flex-col items-center justify-center flex-1 h-full text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors"
                    aria-label="Search"
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
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                    <span className="text-xs mt-1">Search</span>
                </Link>

                <Link
                    to="/messages"
                    className="flex flex-col items-center justify-center flex-1 h-full text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors"
                    aria-label="Messages"
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
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                    </svg>
                    <span className="text-xs mt-1">Messages</span>
                </Link>

                <Link
                    to="/notifications"
                    className="flex flex-col items-center justify-center flex-1 h-full text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors"
                    aria-label="Notifications"
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
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                        />
                    </svg>
                    <span className="text-xs mt-1">Notifications</span>
                </Link>

                <Link
                    to="/profile"
                    className="flex flex-col items-center justify-center flex-1 h-full text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors"
                    aria-label="Profile"
                    tabIndex={0}
                >
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                        alt="Profile"
                        className="w-6 h-6 rounded-full"
                    />
                    <span className="text-xs mt-1">Profile</span>
                </Link>
            </div>
        </nav>
    );
};

export default MobileNav;