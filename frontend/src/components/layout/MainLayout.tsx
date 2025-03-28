import { ReactNode } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import LeftSidebar from './LeftSidebar';
import MobileNav from './MobileNav';

interface MainLayoutProps {
    children: ReactNode;
    onHomeClick?: () => void;
}

const MainLayout = ({ children, onHomeClick }: MainLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />

            <div className="flex-grow pt-16 pb-16 md:pb-0">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 relative">
                        {/* Left Sidebar - 1/4 width on xl screens */}
                        <div className="hidden xl:block col-span-1">
                            <LeftSidebar onHomeClick={onHomeClick} />
                        </div>

                        {/* Left Vertical Separator */}
                        <div className="hidden xl:block absolute left-1/4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" aria-hidden="true" />

                        {/* Main Content - 2/4 width on xl screens */}
                        <main id="main-content" className="col-span-1 xl:col-span-2 py-6 px-4">
                            {children}
                        </main>

                        {/* Right Vertical Separator */}
                        <div className="hidden xl:block absolute right-1/4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" aria-hidden="true" />

                        {/* Right Sidebar - 1/4 width on xl screens */}
                        <div className="hidden xl:block col-span-1">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation - Only visible on small screens */}
            <MobileNav onHomeClick={onHomeClick} />
        </div>
    );
};

export default MainLayout; 