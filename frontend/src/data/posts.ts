import { Post } from '../types/post';

export const mockPosts: Post[] = [
    {
        id: '1',
        author: {
            id: 'user1',
            name: 'John Doe',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
            username: 'johndoe'
        },
        content: 'Just finished building my first React app with Tailwind CSS. The experience was amazing! #webdev #reactjs #tailwindcss',
        image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000',
        createdAt: '2023-04-15T10:30:00.000Z',
        likes: 42,
        comments: [
            {
                id: 'comment1',
                author: {
                    id: 'user2',
                    name: 'Jane Smith',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
                    username: 'janesmith'
                },
                content: 'Looks great! What features did you implement?',
                createdAt: '2023-04-15T10:45:00.000Z',
                likes: 5,
                replies: [
                    {
                        id: 'reply1',
                        author: {
                            id: 'user1',
                            name: 'John Doe',
                            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
                            username: 'johndoe'
                        },
                        content: 'I implemented user authentication, data persistence, and responsive design!',
                        createdAt: '2023-04-15T11:15:00.000Z',
                        likes: 2
                    },
                    {
                        id: 'reply2',
                        author: {
                            id: 'user4',
                            name: 'Alice Williams',
                            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
                            username: 'alicewilliams'
                        },
                        content: 'I\'d love to see a demo sometime!',
                        createdAt: '2023-04-15T11:30:00.000Z',
                        likes: 1
                    }
                ]
            },
            {
                id: 'comment2',
                author: {
                    id: 'user3',
                    name: 'Bob Johnson',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
                    username: 'bobjohnson'
                },
                content: 'I\'ve been wanting to try Tailwind. How was the learning curve?',
                createdAt: '2023-04-15T11:00:00.000Z',
                likes: 3,
                replies: [
                    {
                        id: 'reply3',
                        author: {
                            id: 'user1',
                            name: 'John Doe',
                            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
                            username: 'johndoe'
                        },
                        content: 'It was surprisingly easy! The documentation is excellent.',
                        createdAt: '2023-04-15T11:45:00.000Z',
                        likes: 2
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        author: {
            id: 'user2',
            name: 'Jane Smith',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
            username: 'janesmith'
        },
        content: 'Enjoying a beautiful sunset at the beach today. Sometimes you just need to take a break and appreciate nature. 🌅',
        image: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?q=80&w=1000',
        createdAt: '2023-04-14T19:20:00.000Z',
        likes: 128,
        comments: [
            {
                id: 'comment3',
                author: {
                    id: 'user1',
                    name: 'John Doe',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
                    username: 'johndoe'
                },
                content: 'Wow! Which beach is this?',
                createdAt: '2023-04-14T19:25:00.000Z',
                likes: 2,
                replies: [
                    {
                        id: 'reply4',
                        author: {
                            id: 'user2',
                            name: 'Jane Smith',
                            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
                            username: 'janesmith'
                        },
                        content: 'It\'s Malibu Beach! Have you been there?',
                        createdAt: '2023-04-14T19:35:00.000Z',
                        likes: 1
                    }
                ]
            }
        ]
    },
    {
        id: '3',
        author: {
            id: 'user3',
            name: 'Bob Johnson',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
            username: 'bobjohnson'
        },
        content: 'Just got my hands on the new tech gadget everyone\'s talking about. The hype is real! What do you guys think? Worth the investment?',
        createdAt: '2023-04-13T14:15:00.000Z',
        likes: 75,
        comments: []
    },
    {
        id: '4',
        author: {
            id: 'user4',
            name: 'Alice Williams',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
            username: 'alicewilliams'
        },
        content: 'Just finished reading this amazing book on artificial intelligence. Its mind- blowing how fast this field is evolving! Highly recommend for anyone interested in tech.',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000',
        createdAt: '2023-04-12T09:10:00.000Z',
        likes: 53,
        comments: [
            {
                id: 'comment4',
                author: {
                    id: 'user3',
                    name: 'Bob Johnson',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
                    username: 'bobjohnson'
                },
                content: 'What\'s the title? I\'ve been looking for a good read on AI!',
                createdAt: '2023-04-12T09:30:00.000Z',
                likes: 1,
                replies: [
                    {
                        id: 'reply5',
                        author: {
                            id: 'user4',
                            name: 'Alice Williams',
                            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
                            username: 'alicewilliams'
                        },
                        content: '"Artificial Intelligence: A Modern Approach" by Stuart Russell and Peter Norvig. It\'s a classic!',
                        createdAt: '2023-04-12T10:00:00.000Z',
                        likes: 3
                    }
                ]
            }
        ]
    }
]; 