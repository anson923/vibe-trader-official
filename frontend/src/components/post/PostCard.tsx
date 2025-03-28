import { useState } from 'react';
import { Post } from '../../types/post';

interface PostCardProps {
    post: Post;
    onClick?: () => void;
}

const PostCard = ({ post, onClick }: PostCardProps) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(post.likes);

    const handleLike = (e: React.MouseEvent) => {
        // Prevent event bubbling to parent (clicking post)
        e.stopPropagation();

        if (isLiked) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
        setIsLiked(!isLiked);
    };

    const handlePostClick = () => {
        if (onClick) onClick();
    };

    const handleCommentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onClick) onClick();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (onClick) onClick();
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-6 transition-all duration-200 hover:shadow-md hover:translate-y-[-2px] cursor-pointer"
            onClick={handlePostClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-label={`View post by ${post.author.name}: ${post.content.substring(0, 50)}${post.content.length > 50 ? '...' : ''}`}
        >
            {/* Post Header */}
            <div className="flex items-center p-4">
                <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        {post.author.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        @{post.author.username} • {formatDate(post.createdAt)}
                    </p>
                </div>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-3">
                <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">{post.content}</p>
            </div>

            {/* Post Image (if any) */}
            {post.image && (
                <div className="w-full">
                    <img
                        src={post.image}
                        alt="Post attachment"
                        className="w-full h-auto max-h-[500px] object-cover"
                    />
                </div>
            )}

            {/* Post Stats */}
            <div className="flex items-center justify-between px-4 py-2 text-gray-500 dark:text-gray-400 text-sm border-t border-gray-100 dark:border-gray-700">
                <span>{likeCount} {likeCount === 1 ? 'like' : 'likes'}</span>
                <span>{post.comments.length} {post.comments.length === 1 ? 'comment' : 'comments'}</span>
            </div>

            {/* Post Actions */}
            <div className="flex justify-around py-2 border-t border-gray-100 dark:border-gray-700">
                <button
                    className={`flex items-center px-4 py-2 rounded-md transition-colors ${isLiked
                        ? 'text-red-500 dark:text-red-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                    onClick={handleLike}
                    aria-label={isLiked ? 'Unlike post' : 'Like post'}
                    tabIndex={0}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={isLiked ? 'currentColor' : 'none'}
                        viewBox="0 0 24 24"
                        strokeWidth={isLiked ? 0 : 1.5}
                        stroke="currentColor"
                        className="w-5 h-5 mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                    <span>Like</span>
                </button>

                <button
                    className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    onClick={handleCommentClick}
                    aria-label="Comment on post"
                    tabIndex={0}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                        />
                    </svg>
                    <span>Comment</span>
                </button>

                <button
                    className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Share post"
                    tabIndex={0}
                    onClick={(e) => e.stopPropagation()} // Prevent event bubbling
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935-2.186 2.25 2.25 0 0 0-3.935 2.186Z"
                        />
                    </svg>
                    <span>Share</span>
                </button>
            </div>
        </div>
    );
};

export default PostCard; 