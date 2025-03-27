const Sidebar = () => {
    const trendingTopics = [
        { id: 1, name: '#ReactJS', posts: 1234 },
        { id: 2, name: '#TailwindCSS', posts: 987 },
        { id: 3, name: '#WebDevelopment', posts: 875 },
        { id: 4, name: '#JavaScript', posts: 742 },
        { id: 5, name: '#AITechnology', posts: 631 },
    ];

    const suggestedUsers = [
        { id: 'user5', name: 'Emily Davis', username: 'emilydavis', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily' },
        { id: 'user6', name: 'Michael Wilson', username: 'michaelwilson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael' },
        { id: 'user7', name: 'Sarah Garcia', username: 'sarahgarcia', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
    ];

    return (
        <aside className="sticky top-16 h-[calc(100vh-64px)] w-full">
            <div className="flex flex-col h-full">
                <div className="flex-grow space-y-4 pl-4">
                    {/* Search Bar */}
                    <div className="backdrop-blur-sm rounded-xl shadow-sm p-4 transition-colors border border-gray-200 dark:border-gray-700">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
                            aria-label="Search"
                        />
                    </div>

                    {/* Trending Topics */}
                    <div className="backdrop-blur-sm rounded-xl shadow-sm p-4 transition-colors border border-gray-200 dark:border-gray-700">
                        <h2 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">
                            Trending Topics
                        </h2>
                        <ul className="space-y-3">
                            {trendingTopics.map((topic) => (
                                <li key={topic.id}>
                                    <a
                                        href={`/topic/${topic.name.substring(1)}`}
                                        className="block hover:bg-gray-100/30 dark:hover:bg-gray-800/30 p-2 rounded-lg transition-colors"
                                        aria-label={`Trending topic ${topic.name}`}
                                        tabIndex={0}
                                    >
                                        <div className="font-medium text-gray-900 dark:text-gray-100">
                                            {topic.name}
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            {topic.posts} posts
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Suggested Users */}
                    <div className="backdrop-blur-sm rounded-xl shadow-sm p-4 transition-colors border border-gray-200 dark:border-gray-700">
                        <h2 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">
                            Who to Follow
                        </h2>
                        <ul className="space-y-4">
                            {suggestedUsers.map((user) => (
                                <li key={user.id} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img
                                            src={user.avatar}
                                            alt={user.name}
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <div className="ml-3">
                                            <div className="font-medium text-gray-900 dark:text-gray-100">
                                                {user.name}
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                @{user.username}
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="text-sm font-medium bg-gray-100/50 hover:bg-gray-200/50 dark:bg-gray-700/50 dark:hover:bg-gray-600/50 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full transition-colors"
                                        aria-label={`Follow ${user.name}`}
                                        tabIndex={0}
                                    >
                                        Follow
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="mt-auto pl-4 pb-6 pt-4">
                    <div className="text-xs text-gray-500 dark:text-gray-400 px-4">
                        <div className="flex flex-wrap gap-2">
                            <a href="/about" className="hover:underline" tabIndex={0}>About</a>
                            <a href="/terms" className="hover:underline" tabIndex={0}>Terms</a>
                            <a href="/privacy" className="hover:underline" tabIndex={0}>Privacy</a>
                            <a href="/cookies" className="hover:underline" tabIndex={0}>Cookies</a>
                            <a href="/advertising" className="hover:underline" tabIndex={0}>Advertising</a>
                        </div>
                        <div className="mt-2">
                            © 2023 MemeTrader Corporation
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar; 