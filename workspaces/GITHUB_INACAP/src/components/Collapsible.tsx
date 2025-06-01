import React, { useState } from 'react';
import { CollapsibleContent } from '../types';
import { ChevronDownIcon, ChevronUpIcon } from './icons';
import { SegmentRenderer, ContentItemRenderer } from './ContentRenderer';

interface CollapsibleProps {
  item: CollapsibleContent;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="my-4 border border-neutral-300 rounded-md shadow-sm">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center p-3 bg-neutral-100 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition-colors rounded-t-md"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-neutral-700"><SegmentRenderer segments={item.titleSegments} /></span>
        {isOpen ? <ChevronUpIcon className="w-5 h-5 text-neutral-600" /> : <ChevronDownIcon className="w-5 h-5 text-neutral-600" />}
      </button>
      {isOpen && (
        <div className="p-4 border-t border-neutral-300 bg-white rounded-b-md">
          {item.children.map((child, index) => (
            <ContentItemRenderer key={child.id || `collapsible_child_${index}`} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};