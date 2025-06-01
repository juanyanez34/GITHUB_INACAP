
import React from 'react';
import { SettingsIcon, UserAvatarIcon, ExternalLinkIcon, KeyIcon } from './icons/MiscIcons'; // Placeholder icons

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 shadow-sm shrink-0">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-sm font-medium text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-md">
              <KeyIcon className="w-4 h-4 mr-2" />
              Get API key
            </button>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white">
              Studio
            </a>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white">
              Dashboard
            </a>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white flex items-center">
              Documentation <ExternalLinkIcon className="w-4 h-4 ml-1" />
            </a>
            <button className="text-gray-400 hover:text-white">
              <SettingsIcon className="w-6 h-6" />
            </button>
            <UserAvatarIcon className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
};
