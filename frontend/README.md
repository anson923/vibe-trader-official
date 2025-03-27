# MemeTrader - Social Media Homepage

A responsive social media homepage built with React and Tailwind CSS v4.

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Dark Mode Support**: Includes dark mode styling throughout the app
- **Post Feed**: Display posts with images, text content, and interaction buttons
- **Like Functionality**: Users can like posts
- **Comment System**: Users can view and add comments to posts
- **Create Post**: Interface to create new posts
- **Accessibility**: Includes ARIA attributes and keyboard navigation support

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── comment/
│   │   │   └── CommentSection.tsx  # Comment section component
│   │   ├── layout/
│   │   │   ├── MainLayout.tsx      # Main layout wrapper
│   │   │   ├── Navbar.tsx          # Top navigation bar
│   │   │   └── Sidebar.tsx         # Right sidebar with trends and suggestions
│   │   └── post/
│   │       └── PostCard.tsx        # Individual post component
│   ├── data/
│   │   └── posts.ts                # Mock post data
│   ├── pages/
│   │   └── HomePage.tsx            # Main homepage component
│   ├── types/
│   │   └── post.ts                 # TypeScript interfaces
│   ├── App.tsx                     # Main App component
│   ├── index.css                   # Global styles with Tailwind CSS import
│   └── main.tsx                    # Entry point
├── vite.config.ts                  # Vite configuration with Tailwind CSS plugin
└── README.md                       # Project documentation
```

## Components

### Layout Components

- **Navbar**: Fixed top navigation bar with a logo, search input, and navigation links
- **Sidebar**: Right sidebar with search, trending topics, and suggested users
- **MainLayout**: Layout wrapper that combines Navbar and Sidebar

### Post Components

- **PostCard**: Displays a single post with user information, content, image, and interaction buttons
- **CommentSection**: Displays comments for a post and allows adding new comments

### Page Components

- **HomePage**: Main page that displays the create post form and post feed

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser to the URL shown in the terminal (typically http://localhost:5173)

## Technologies Used

- React 19
- TypeScript
- Tailwind CSS v4
- Vite

## Design Choices

- **UI Components**: Built all UI components from scratch using Tailwind CSS
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Dark Mode**: Included dark mode variants for all UI elements
- **State Management**: Used React's built-in useState for local state management
- **Mock Data**: Created realistic mock data for posts and comments

## Future Enhancements

- User authentication system
- Real-time notifications
- Image upload functionality
- User profile pages
- Search functionality
- Infinite scrolling for posts
