import { ReactNode } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <div className="container mx-auto px-4 sm:px-6 flex flex-grow pt-20">
                <main className="flex-grow max-w-2xl mx-auto lg:mx-0 w-full py-6">
                    {children}
                </main>
                <Sidebar />
            </div>
        </div>
    );
};

export default MainLayout; 