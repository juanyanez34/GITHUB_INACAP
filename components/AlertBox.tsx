
import React from 'react';
import { AlertContent } from '../types';
import { InformationCircleIcon, ExclamationTriangleIcon } from './icons';
import { SegmentRenderer } from './ContentRenderer';


interface AlertBoxProps {
  item: AlertContent;
}

export const AlertBox: React.FC<AlertBoxProps> = ({ item }) => {
  const baseClasses = "p-4 border-l-4 rounded-md my-4 shadow-md";
  let kindClasses = "";
  let iconColorClass = "";
  let IconComponent: React.FC<{className?: string}> | null = null;

  switch (item.kind) {
    case 'note':
    case 'info':
      kindClasses = "bg-red-50 border-red-600 text-red-700";
      IconComponent = InformationCircleIcon;
      iconColorClass = "text-red-600";
      break;
    case 'warning':
      kindClasses = "bg-yellow-50 border-yellow-500 text-yellow-700";
      IconComponent = ExclamationTriangleIcon;
      iconColorClass = "text-yellow-500"; // Matched to border for consistency
      break;
    case 'important':
      kindClasses = "bg-red-50 border-red-600 text-red-700";
      IconComponent = ExclamationTriangleIcon;
      iconColorClass = "text-red-600";
      break;
    default:
      kindClasses = "bg-gray-50 border-gray-500 text-gray-700"; // Fallback, consider neutral
      iconColorClass = "text-gray-500";
  }

  const titleText = item.kind.charAt(0).toUpperCase() + item.kind.slice(1);

  return (
    <div className={`${baseClasses} ${kindClasses}`} role="alert">
      <div className="flex">
        {IconComponent && (
          <div className="flex-shrink-0">
            <IconComponent className={`h-5 w-5 ${iconColorClass}`} />
          </div>
        )}
        <div className="ml-3">
          <p className="text-sm font-medium">
            <SegmentRenderer segments={[`${titleText}: `, ...item.segments]} />
          </p>
        </div>
      </div>
    </div>
  );
};