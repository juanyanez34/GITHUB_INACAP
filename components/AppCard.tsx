
import React from 'react';
import { AppCardData } from '../types';
import { Badge } from './Badge';

export const AppCard: React.FC<AppCardData> = ({ imageUrl, title, description, tags }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
      <div className="p-5 flex-grow">
        <div className="flex items-center mb-4">
          {imageUrl && (
            <img src={imageUrl} alt={title} className="w-12 h-12 rounded-lg mr-4 object-cover bg-gray-700" />
          )}
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 text-sm mb-4 h-20 overflow-hidden text-ellipsis">
          {description}
        </p>
      </div>
      <div className="p-5 bg-gray-800 border-t border-gray-700">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};
