import { ReactNode } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import LeftSidebar from './LeftSidebar';
import MobileNav from './MobileNav';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />

            <div className="flex-grow pt-16 pb-16 md:pb-0">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
                        {/* Left Sidebar - 1/4 width on xl screens */}
                        <div className="hidden xl:block col-span-1">
                            <LeftSidebar />
                        </div>

                        {/* Main Content - 2/4 width on xl screens */}
                        <main className="col-span-1 xl:col-span-2 py-6 px-4">
                            {children}
                        </main>

                        {/* Right Sidebar - 1/4 width on xl screens */}
                        <div className="hidden xl:block col-span-1">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation - Only visible on small screens */}
            <MobileNav />
        </div>
    );
};

export default MainLayout; 