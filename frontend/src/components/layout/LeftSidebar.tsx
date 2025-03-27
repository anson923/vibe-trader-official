import React from 'react';

const LeftSidebar = () => {
    return (
        <aside className="sticky top-1/2 -translate-y-1/2 w-full">
            <div className="p-4 space-y-3 bg-transparent w-full">
                <a
                    href="/"
                    className="flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-gray-100/30 dark:text-gray-200 dark:hover:bg-gray-800/30 transition-colors"
                    aria-label="Home"
                    tabIndex={0}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-3 flex-shrink-0"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                    <span className="text-base font-medium">Home</span>
                </a>

                <a
                    href="/messages"
                    className="flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-gray-100/30 dark:text-gray-200 dark:hover:bg-gray-800/30 transition-colors"
                    aria-label="Messages"
                    tabIndex={0}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-3 flex-shrink-0"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                    </svg>
                    <span className="text-base font-medium">Messages</span>
                </a>

                <a
                    href="/notifications"
                    className="flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-gray-100/30 dark:text-gray-200 dark:hover:bg-gray-800/30 transition-colors"
                    aria-label="Notifications"
                    tabIndex={0}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-3 flex-shrink-0"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                        />
                    </svg>
                    <span className="text-base font-medium">Notifications</span>
                </a>
            </div>
        </aside>
    );
};

export default LeftSidebar;