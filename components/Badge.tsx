
import React from 'react';

interface BadgeProps {
  text: string;
}

export const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <span className="px-2.5 py-1 text-xs font-medium text-blue-300 bg-blue-900 bg-opacity-50 border border-blue-700 rounded-full">
      {text}
    </span>
  );
};
