import { useState } from 'react';
import { Comment } from '../../types/post';

interface CommentSectionProps {
    comments: Comment[];
    postId: string;
}

const CommentSection = ({ comments, postId }: CommentSectionProps) => {
    const [commentText, setCommentText] = useState('');
    const [commentsList, setCommentsList] = useState<Comment[]>(comments);

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

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <div className="border-t border-gray-100 dark:border-gray-700 px-4 py-3">
            {/* Comment Form */}
            <form onSubmit={handleSubmitComment} className="mb-4">
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
            <div className="space-y-4">
                {commentsList.length > 0 ? (
                    commentsList.map((comment) => (
                        <div key={comment.id} className="flex space-x-3">
                            <img
                                src={comment.author.avatar}
                                alt={comment.author.name}
                                className="w-8 h-8 rounded-full"
                            />
                            <div className="flex-grow">
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg px-3 py-2">
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
                                    >
                                        Like ({comment.likes})
                                    </button>
                                    <span className="text-gray-400 dark:text-gray-600">•</span>
                                    <button
                                        className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                                        aria-label="Reply to comment"
                                        tabIndex={0}
                                    >
                                        Reply
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 dark:text-gray-400 py-4">
                        No comments yet. Be the first to comment!
                    </p>
                )}
            </div>
        </div>
    );
};

export default CommentSection; 