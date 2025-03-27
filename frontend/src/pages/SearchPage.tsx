import { useState, useEffect } from 'react';
import MainLayout from '../components/layout/MainLayout';
import PostCard from '../components/post/PostCard';
import { mockPosts } from '../data/posts';
import { Post } from '../types/post';

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Post[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    // Handle search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    // Handle search form submission
    const handleSubmitSearch = (e: React.FormEvent) => {
        e.preventDefault();
        performSearch();
    };

    // Perform the search function
    const performSearch = () => {
        if (!searchQuery.trim()) {
            setSearchResults([]);
            return;
        }

        setIsSearching(true);

        // Simulate a search delay for realism
        setTimeout(() => {
            const query = searchQuery.toLowerCase().trim();
            
            // Search in post content and author names
            const results = mockPosts.filter(post => 
                post.content.toLowerCase().includes(query) || 
                post.author.name.toLowerCase().includes(query) ||
                post.author.username.toLowerCase().includes(query)
            );

            setSearchResults(results);
            setIsSearching(false);
        }, 500);
    };

    // Trigger search when query changes with a debounce
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchQuery.trim()) {
                performSearch();
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    return (
        <MainLayout>
            <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                    <h1 className="font-bold text-2xl mb-4 text-gray-900 dark:text-gray-100">
                        Search Posts
                    </h1>
                    <form onSubmit={handleSubmitSearch} className="mb-6">
                        <div className="relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Search by keywords, user names, or hashtags..."
                                className="w-full px-4 py-3 pr-12 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                                aria-label="Search query"
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                                aria-label="Search"
                                tabIndex={0}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </form>

                    {/* Search Results */}
                    <div>
                        {isSearching ? (
                            <div className="flex justify-center items-center py-8">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                            </div>
                        ) : searchQuery.trim() ? (
                            <>
                                <h2 className="font-semibold text-lg mb-4 text-gray-700 dark:text-gray-300">
                                    {searchResults.length === 0
                                        ? 'No results found'
                                        : `Found ${searchResults.length} result${searchResults.length === 1 ? '' : 's'}`}
                                </h2>
                                <div className="space-y-6">
                                    {searchResults.map((post) => (
                                        <PostCard key={post.id} post={post} />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-6 text-gray-500 dark:text-gray-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-12 h-12 mx-auto mb-3 text-gray-400"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                                <p>Enter a search term to find posts</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default SearchPage; 