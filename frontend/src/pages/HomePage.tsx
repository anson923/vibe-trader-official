import { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import PostCard from '../components/post/PostCard';
import DetailedPostView from '../components/post/DetailedPostView';
import { mockPosts } from '../data/posts';
import { Post } from '../types/post';

const HomePage = () => {
    const [posts, setPosts] = useState(mockPosts);
    const [newPostText, setNewPostText] = useState('');
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    const handlePostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewPostText(e.target.value);
    };

    const handleSubmitPost = (e: React.FormEvent) => {
        e.preventDefault();

        if (newPostText.trim()) {
            const newPost = {
                id: `post-${Date.now()}`,
                author: {
                    id: 'currentUser',
                    name: 'Current User',
                    username: 'currentuser',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Current'
                },
                content: newPostText.trim(),
                createdAt: new Date().toISOString(),
                likes: 0,
                comments: []
            };

            setPosts([newPost, ...posts]);
            setNewPostText('');
        }
    };

    const handlePostClick = (post: Post) => {
        // Scroll to top when viewing a post detail
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSelectedPost(post);
    };

    const handleBackToFeed = () => {
        // Scroll to top when returning to feed
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSelectedPost(null);
    };

    return (
        <MainLayout onHomeClick={handleBackToFeed}>
            {selectedPost ? (
                <DetailedPostView post={selectedPost} onBack={handleBackToFeed} />
            ) : (
                <div className="space-y-6">
                    {/* Create Post Box */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
                        <h2 className="font-bold text-xl mb-4 text-gray-900 dark:text-gray-100">
                            Create Post
                        </h2>
                        <form onSubmit={handleSubmitPost}>
                            <div className="flex space-x-3">
                                <img
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Current"
                                    alt="Your avatar"
                                    className="w-10 h-10 rounded-full"
                                />
                                <div className="flex-grow">
                                    <textarea
                                        value={newPostText}
                                        onChange={handlePostChange}
                                        placeholder="What's on your mind?"
                                        rows={3}
                                        className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 resize-none"
                                        aria-label="Create a post"
                                    ></textarea>

                                    <div className="flex justify-between items-center mt-3">
                                        <div className="flex space-x-2">
                                            <button
                                                type="button"
                                                className="flex items-center px-3 py-1.5 text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                                aria-label="Add photo"
                                                tabIndex={0}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-5 h-5 mr-1"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                                    />
                                                </svg>
                                                Photo
                                            </button>
                                            <button
                                                type="button"
                                                className="flex items-center px-3 py-1.5 text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                                aria-label="Add emoji"
                                                tabIndex={0}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-5 h-5 mr-1"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                                                    />
                                                </svg>
                                                Emoji
                                            </button>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={!newPostText.trim()}
                                            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                            aria-label="Post"
                                            tabIndex={0}
                                        >
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Post Feed */}
                    <div className="space-y-6">
                        {posts.map((post) => (
                            <div key={post.id}>
                                <PostCard post={post} onClick={() => handlePostClick(post)} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </MainLayout>
    );
};

export default HomePage; 