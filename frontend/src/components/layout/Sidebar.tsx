import { useRef, useEffect, useState, useCallback } from 'react';

const Sidebar = () => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isLocked, setIsLocked] = useState(false);
    const [sidebarHeight, setSidebarHeight] = useState(0);
    const [contentHeight, setContentHeight] = useState(0);
    const [sidebarBottom, setSidebarBottom] = useState(0);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [sidebarPosition, setSidebarPosition] = useState(0);

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

    // Calculate heights and positions
    const updateHeights = useCallback(() => {
        if (sidebarRef.current && contentRef.current) {
            setSidebarHeight(sidebarRef.current.scrollHeight);
            setContentHeight(contentRef.current.scrollHeight);
            const sidebarRect = sidebarRef.current.getBoundingClientRect();
            setSidebarBottom(sidebarRect.bottom);
        }
    }, []);

    // Find the main content element in the DOM
    useEffect(() => {
        // Find the main content panel by selecting the main element with ID
        const mainElement = document.getElementById('main-content');
        
        if (mainElement) {
            contentRef.current = mainElement as HTMLDivElement;
            
            // Set up a ResizeObserver to detect content changes
            const resizeObserver = new ResizeObserver(() => {
                updateHeights();
            });
            
            resizeObserver.observe(mainElement);
            
            // Initial update with a small delay to ensure accurate measurements
            setTimeout(updateHeights, 100);
            
            return () => {
                resizeObserver.disconnect();
            };
        }
    }, [updateHeights]);

    // Update measurements when component mounts and on window resize
    useEffect(() => {
        const handleResize = () => {
            updateHeights();
            // Reset locked state on resize to recalculate
            setIsLocked(false);
            setSidebarPosition(0);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [updateHeights]);

    // Handle scroll synchronization
    useEffect(() => {
        const handleScroll = () => {
            if (!contentRef.current || !sidebarRef.current) return;
            
            const currentScrollY = window.scrollY;
            const scrollDirection = currentScrollY > prevScrollY ? 'down' : 'up';
            const scrollDifference = Math.abs(currentScrollY - prevScrollY);
            
            const viewportHeight = window.innerHeight;
            const sidebarContainer = sidebarRef.current.parentElement as HTMLDivElement;
            
            // For smoother transitions, apply CSS transitions
            sidebarRef.current.style.transition = 'transform 0.05s ease-out';
            
            // Calculate if we've reached the bottom of the sidebar
            const shouldLock = 
                sidebarHeight > viewportHeight && 
                currentScrollY + viewportHeight >= sidebarBottom;
            
            // Apply different logic based on scroll direction
            if (scrollDirection === 'up') {
                // When scrolling up, always synchronize the sidebar
                if (isLocked) {
                    // If we were locked, unlock and start tracking from current position
                    setIsLocked(false);
                }
                
                // Synchronize by moving the sidebar down (decrease negative position)
                let newPosition = sidebarPosition - scrollDifference;
                // Don't go above the initial position (0)
                newPosition = Math.max(newPosition, 0);
                
                setSidebarPosition(newPosition);
                sidebarRef.current.style.transform = `translateY(-${newPosition}px)`;
            } else if (scrollDirection === 'down') {
                // Only when not locked, track the position but don't move
                if (!isLocked) {
                    // Keep track of where we would be if synchronizing
                    let newPosition = sidebarPosition + scrollDifference;
                    
                    // Check if sidebar would reach bottom
                    const maxPosition = sidebarHeight - viewportHeight + 64; // 64px for header offset
                    
                    if (newPosition >= maxPosition) {
                        newPosition = maxPosition;
                        setIsLocked(true);
                    }
                    
                    setSidebarPosition(newPosition);
                    // When scrolling down, the sidebar stays in place
                    // We only update its transform if it's reached the bottom
                    if (newPosition >= maxPosition) {
                        sidebarRef.current.style.transform = `translateY(-${maxPosition}px)`;
                    }
                }
            }
            
            setPrevScrollY(currentScrollY);
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLocked, sidebarHeight, contentHeight, sidebarBottom, prevScrollY, sidebarPosition]);

    return (
        <aside className="sticky top-16 h-[calc(100vh-64px)] w-full overflow-hidden">
            <div 
                ref={sidebarRef} 
                className="flex flex-col will-change-transform" 
                style={{ 
                    transform: 'translateY(0)', 
                    transformOrigin: 'top' 
                }}
            >
                <div className="flex-grow space-y-4 pl-4">
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