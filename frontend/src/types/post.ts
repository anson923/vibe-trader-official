export interface User {
    id: string;
    name: string;
    username: string;
    avatar: string;
}

export interface Comment {
    id: string;
    author: User;
    content: string;
    createdAt: string;
    likes: number;
    replies?: Comment[];
}

export interface Post {
    id: string;
    author: User;
    content: string;
    image?: string;
    createdAt: string;
    likes: number;
    comments: Comment[];
} 