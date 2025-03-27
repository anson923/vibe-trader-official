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
        <aside className="w-80 flex-shrink-0">
            <div className="space-y-4 pl-4">
                {/* Search Bar */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
                        aria-label="Search"
                    />
                </div>

                {/* Trending Topics */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
                    <h2 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">
                        Trending Topics
                    </h2>
                    <ul className="space-y-3">
                        {trendingTopics.map((topic) => (
                            <li key={topic.id}>
                                <a
                                    href={`/topic/${topic.name.substring(1)}`}
                                    className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"
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
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
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
                                    className="text-sm font-medium bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full transition-colors"
                                    aria-label={`Follow ${user.name}`}
                                    tabIndex={0}
                                >
                                    Follow
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Footer Links */}
                <div className="text-xs text-gray-500 dark:text-gray-400 px-4">
                    <div className="flex flex-wrap gap-2">
                        <a href="/about" className="hover:underline" tabIndex={0}>About</a>
                        <a href="/terms" className="hover:underline" tabIndex={0}>Terms</a>
                        <a href="/privacy" className="hover:underline" tabIndex={0}>Privacy</a>
                        <a href="/cookies" className="hover:underline" tabIndex={0}>Cookies</a>
                        <a href="/advertising" className="hover:underline" tabIndex={0}>Advertising</a>
                    </div>
                    <div className="mt-2">
                        © 2023 VibeSocial Corporation
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar; 