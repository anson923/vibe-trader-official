import { useState } from 'react';
import { Post, Comment } from '../../types/post';

interface DetailedPostViewProps {
    post: Post;
    onBack: () => void;
}

const DetailedPostView = ({ post, onBack }: DetailedPostViewProps) => {
    const [commentText, setCommentText] = useState('');
    const [commentsList, setCommentsList] = useState<Comment[]>(post.comments);

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentText(e.target.value);
    };

    const handleSubmitComment = (e: React.FormEvent) => {
        e.preventDefault();

        if (commentText.trim()) {
            const newComment: Comment = {
                id: `new-${Date.now()}`,
                author: {
                    id: 'currentUser',
                    name: 'Current User',
                    username: 'currentuser',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Current'
                },
                content: commentText.trim(),
                createdAt: new Date().toISOString(),
                likes: 0
            };

            setCommentsList([newComment, ...commentsList]);
            setCommentText('');
        }
    };

    const handleSubmitReply = (commentId: string, replyText: string) => {
        if (replyText.trim()) {
            const newReply: Comment = {
                id: `reply-${Date.now()}`,
                author: {
                    id: 'currentUser',
                    name: 'Current User',
                    username: 'currentuser',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Current'
                },
                content: replyText.trim(),
                createdAt: new Date().toISOString(),
                likes: 0
            };

            const updatedComments = commentsList.map(comment => {
                if (comment.id === commentId) {
                    return {
                        ...comment,
                        replies: [...(comment.replies || []), newReply]
                    };
                }
                return comment;
            });

            setCommentsList(updatedComments);
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

    // Comment component with collapsible replies
    const CommentWithReplies = ({ comment }: { comment: Comment }) => {
        const [isReplying, setIsReplying] = useState(false);
        const [replyText, setReplyText] = useState('');
        const [showReplies, setShowReplies] = useState(false);
        const hasReplies = comment.replies && comment.replies.length > 0;

        const handleReplyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setReplyText(e.target.value);
        };

        const handleReplySubmit = (e: React.FormEvent) => {
            e.preventDefault();
            handleSubmitReply(comment.id, replyText);
            setReplyText('');
            setIsReplying(false);
            setShowReplies(true);
        };

        const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                action();
            }
        };

        return (
            <div className="mb-4">
                <div className="flex space-x-3">
                    <img
                        src={comment.author.avatar}
                        alt={comment.author.name}
                        className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-grow">
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg px-3 py-2 backdrop-blur-sm bg-opacity-70 dark:bg-opacity-70">
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-gray-900 dark:text-gray-100">
                                    {comment.author.name}
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {formatDate(comment.createdAt)}
                                </span>
                            </div>
                            <p className="text-gray-800 dark:text-gray-200 mt-1">{comment.content}</p>
                        </div>
                        <div className="flex items-center mt-1 ml-1 space-x-2">
                            <button
                                className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                                aria-label="Like comment"
                                tabIndex={0}
                                onKeyDown={(e) => handleKeyDown(e, () => { })}
                            >
                                Like ({comment.likes})
                            </button>
                            <span className="text-gray-400 dark:text-gray-600">•</span>
                            <button
                                onClick={() => setIsReplying(!isReplying)}
                                onKeyDown={(e) => handleKeyDown(e, () => setIsReplying(!isReplying))}
                                className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                                aria-label="Reply to comment"
                                tabIndex={0}
                            >
                                Reply
                            </button>
                            {hasReplies && (
                                <>
                                    <span className="text-gray-400 dark:text-gray-600">•</span>
                                    <button
                                        onClick={() => setShowReplies(!showReplies)}
                                        onKeyDown={(e) => handleKeyDown(e, () => setShowReplies(!showReplies))}
                                        className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                                        aria-label={showReplies ? "Hide replies" : `Show ${comment.replies?.length} ${comment.replies?.length === 1 ? 'reply' : 'replies'}`}
                                        aria-expanded={showReplies}
                                        tabIndex={0}
                                    >
                                        {showReplies ? "Hide replies" : `Show ${comment.replies?.length} ${comment.replies?.length === 1 ? 'reply' : 'replies'}`}
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Reply Form */}
                        {isReplying && (
                            <form onSubmit={handleReplySubmit} className="mt-2">
                                <div className="flex items-start space-x-2">
                                    <img
                                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Current"
                                        alt="Your avatar"
                                        className="w-6 h-6 rounded-full mt-2"
                                    />
                                    <div className="flex-grow">
                                        <textarea
                                            value={replyText}
                                            onChange={handleReplyChange}
                                            placeholder="Write a reply..."
                                            rows={1}
                                            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 resize-none"
                                            aria-label="Write a reply"
                                        ></textarea>
                                        <div className="flex justify-end mt-2">
                                            <button
                                                type="submit"
                                                disabled={!replyText.trim()}
                                                className="px-3 py-1 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                aria-label="Post reply"
                                                tabIndex={0}
                                            >
                                                Reply
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}

                        {/* Nested Replies */}
                        {showReplies && hasReplies && (
                            <div
                                className="ml-4 mt-2 pl-4 border-l-2 border-gray-200 dark:border-gray-700"
                                aria-label={`Replies to ${comment.author.name}'s comment`}
                            >
                                {comment.replies?.map((reply) => (
                                    <div key={reply.id} className="flex space-x-3 mb-3">
                                        <img
                                            src={reply.author.avatar}
                                            alt={reply.author.name}
                                            className="w-6 h-6 rounded-full"
                                        />
                                        <div className="flex-grow">
                                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg px-3 py-2 backdrop-blur-sm bg-opacity-70 dark:bg-opacity-70">
                                                <div className="flex items-center justify-between">
                                                    <span className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                                                        {reply.author.name}
                                                    </span>
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                                        {formatDate(reply.createdAt)}
                                                    </span>
                                                </div>
                                                <p className="text-gray-800 dark:text-gray-200 mt-1 text-sm">{reply.content}</p>
                                            </div>
                                            <div className="flex items-center mt-1 ml-1 space-x-2">
                                                <button
                                                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                                                    aria-label="Like reply"
                                                    tabIndex={0}
                                                    onKeyDown={(e) => handleKeyDown(e, () => { })}
                                                >
                                                    Like ({reply.likes})
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="space-y-4">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-4"
                aria-label="Go back"
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to feed
            </button>

            {/* Post Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
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
                    <span>{post.likes} {post.likes === 1 ? 'like' : 'likes'}</span>
                    <span>{commentsList.length} {commentsList.length === 1 ? 'comment' : 'comments'}</span>
                </div>

                {/* Post Actions */}
                <div className="flex justify-around py-2 border-t border-gray-100 dark:border-gray-700">
                    <button
                        className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Like post"
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
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                        </svg>
                        <span>Like</span>
                    </button>

                    <button
                        className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
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

                {/* Comments Section */}
                <div className="border-t border-gray-100 dark:border-gray-700 px-4 py-4">
                    <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">
                        Comments
                    </h3>

                    {/* Comment Form */}
                    <form onSubmit={handleSubmitComment} className="mb-6">
                        <div className="flex items-start space-x-3">
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Current"
                                alt="Your avatar"
                                className="w-8 h-8 rounded-full mt-2"
                            />
                            <div className="flex-grow">
                                <textarea
                                    value={commentText}
                                    onChange={handleCommentChange}
                                    placeholder="Write a comment..."
                                    rows={1}
                                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 resize-none"
                                    aria-label="Write a comment"
                                ></textarea>
                                <div className="flex justify-end mt-2">
                                    <button
                                        type="submit"
                                        disabled={!commentText.trim()}
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        aria-label="Post comment"
                                        tabIndex={0}
                                    >
                                        Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* Comments List */}
                    <div className="space-y-1">
                        {commentsList.length > 0 ? (
                            commentsList.map((comment) => (
                                <CommentWithReplies key={comment.id} comment={comment} />
                            ))
                        ) : (
                            <p className="text-center text-gray-500 dark:text-gray-400 py-4">
                                No comments yet. Be the first to comment!
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedPostView; 