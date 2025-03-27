import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const MessagesPage = () => {
    return (
        <MainLayout>
            <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                    <h1 className="font-bold text-2xl mb-4 text-gray-900 dark:text-gray-100">
                        Messages
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        This is a placeholder for the messages page
                    </p>
                </div>
            </div>
        </MainLayout>
    );
};

export default MessagesPage; 