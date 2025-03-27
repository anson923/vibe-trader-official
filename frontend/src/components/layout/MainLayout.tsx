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
            <div className="flex-grow pt-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col xl:flex-row justify-between relative">
                        <main className="w-full xl:w-[calc(100%-21rem)] max-w-3xl xl:max-w-none mx-auto xl:mx-0 py-6">
                            {children}
                        </main>

                        <div className="hidden xl:block xl:absolute xl:right-0 xl:top-0">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout; 