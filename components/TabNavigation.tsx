
import React from 'react';
import { TabCategory } from '../types';
import { TAB_CATEGORIES } from '../constants';

interface TabNavigationProps {
  activeTab: TabCategory;
  onTabClick: (tab: TabCategory) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabClick }) => {
  return (
    <div className="border-b border-gray-700">
      <nav className="-mb-px flex space-x-8 justify-center" aria-label="Tabs">
        {TAB_CATEGORIES.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabClick(tab)}
            className={`
              ${
                activeTab === tab
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
              }
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
            `}
            aria-current={activeTab === tab ? 'page' : undefined}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};
