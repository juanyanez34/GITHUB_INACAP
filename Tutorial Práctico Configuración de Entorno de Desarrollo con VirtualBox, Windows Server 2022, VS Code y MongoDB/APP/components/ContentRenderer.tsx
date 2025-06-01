
import React from 'react';
import {
  ContentItem,
  ParagraphContent,
  HeadingContent,
  ListContent,
  CodeContent,
  AlertContent,
  CollapsibleContent,
  ImagePlaceholderContent,
  TextSegment,
  LinkItem,
  SoftwareHighlight,
} from '../types';
import { CodeBlock } from './CodeBlock';
import { AlertBox } from './AlertBox';
import { Collapsible } from './Collapsible';

export const SegmentRenderer: React.FC<{ segments: TextSegment[] }> = ({ segments }) => {
  return (
    <>
      {segments.map((segment, index) => {
        if (typeof segment === 'string') {
          return <React.Fragment key={index}>{segment}</React.Fragment>;
        }
        if ('isSoftware' in segment && segment.isSoftware) {
          return <strong className="text-red-600 font-semibold" key={index}>{segment.text}</strong>;
        }
        if ('href' in segment) {
          return (
            <a
              href={segment.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 hover:underline"
              key={index}
            >
              {segment.text}
            </a>
          );
        }
        return null; 
      })}
    </>
  );
};


export const ContentItemRenderer: React.FC<{ item: ContentItem }> = ({ item }) => {
  switch (item.type) {
    case 'heading':
      const HeadingTag = `h${item.level}` as keyof JSX.IntrinsicElements;
      const headingClasses: Record<number, string> = {
        1: 'text-3xl font-bold my-6 text-neutral-800 border-b pb-2',
        2: 'text-2xl font-semibold my-5 text-neutral-700 border-b pb-1',
        3: 'text-xl font-semibold my-4 text-neutral-700',
        4: 'text-lg font-semibold my-3 text-neutral-600',
        5: 'text-base font-semibold my-2 text-neutral-600',
      };
      return <HeadingTag className={headingClasses[item.level] || headingClasses[5]}>{item.text}</HeadingTag>;
    
    case 'paragraph':
      return (
        <p className="my-3 text-neutral-700 leading-relaxed">
          <SegmentRenderer segments={item.segments} />
        </p>
      );

    case 'list':
      const ListTag = item.ordered ? 'ol' : 'ul';
      const listStyle = item.ordered ? 'list-decimal' : 'list-disc';
      return (
        <ListTag className={`${listStyle} pl-6 my-3 text-neutral-700 leading-relaxed space-y-1`}>
          {item.items.map((listItemSegments, index) => (
            <li key={`${item.id}_li_${index}`}>
              <SegmentRenderer segments={listItemSegments} />
            </li>
          ))}
        </ListTag>
      );

    case 'code':
      return <CodeBlock item={item} />;

    case 'alert':
      return <AlertBox item={item} />;

    case 'collapsible':
      return <Collapsible item={item} />;

    case 'image_placeholder':
        return (
            <div className="my-4">
                <img src={item.src} alt={item.alt} className="max-w-full h-auto rounded-md shadow-md border border-neutral-200" />
                {item.caption && <p className="text-sm text-neutral-600 mt-2 text-center italic">{item.caption}</p>}
            </div>
        );
    default:
      // Exhaustive check, if new types are added TypeScript will complain
      const _exhaustiveCheck: never = item;
      console.warn('Unknown content item type:', _exhaustiveCheck);
      return null;
  }
};