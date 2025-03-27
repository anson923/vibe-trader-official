import React from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    return (
        <aside className="sticky top-0 h-[calc(100vh-64px)] w-full flex items-center">
            <nav className="w-full px-8 py-6">
                <div className="flex flex-col items-stretch space-y-6 max-w-xs mx-auto">
                    <Link
                        to="/"
                        className="flex items-center w-full px-6 py-5 text-gray-700 hover:bg-gray-100/30 dark:text-gray-200 dark:hover:bg-gray-800/30 transition-all duration-200 ease-in-out"
                        aria-label="Home"
                        tabIndex={0}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 mr-5 flex-shrink-0"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            />
                        </svg>
                        <span className="text-xl font-medium">Home</span>
                    </Link>

                    <Link
                        to="/search"
                        className="flex items-center w-full px-6 py-5 text-gray-700 hover:bg-gray-100/30 dark:text-gray-200 dark:hover:bg-gray-800/30 transition-all duration-200 ease-in-out"
                        aria-label="Search"
                        tabIndex={0}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 mr-5 flex-shrink-0"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                        <span className="text-xl font-medium">Search</span>
                    </Link>

                    <Link
                        to="/messages"
                        className="flex items-center w-full px-6 py-5 text-gray-700 hover:bg-gray-100/30 dark:text-gray-200 dark:hover:bg-gray-800/30 transition-all duration-200 ease-in-out"
                        aria-label="Messages"
                        tabIndex={0}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 mr-5 flex-shrink-0"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                        </svg>
                        <span className="text-xl font-medium">Messages</span>
                    </Link>

                    <Link
                        to="/notifications"
                        className="flex items-center w-full px-6 py-5 text-gray-700 hover:bg-gray-100/30 dark:text-gray-200 dark:hover:bg-gray-800/30 transition-all duration-200 ease-in-out"
                        aria-label="Notifications"
                        tabIndex={0}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 mr-5 flex-shrink-0"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                            />
                        </svg>
                        <span className="text-xl font-medium">Notifications</span>
                    </Link>
                </div>
            </nav>
        </aside>
    );
};

export default LeftSidebar;