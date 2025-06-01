
export interface LinkItem {
  text: string;
  href: string;
}

export interface SoftwareHighlight {
  text: string; // e.g., "Oracle VM VirtualBox"
  isSoftware: true;
}

export type TextSegment = string | LinkItem | SoftwareHighlight;

export interface ContentItemBase {
  id: string; // Unique ID for React keys
}

export interface ParagraphContent extends ContentItemBase {
  type: 'paragraph';
  segments: TextSegment[];
}

export interface HeadingContent extends ContentItemBase {
  type: 'heading';
  level: 1 | 2 | 3 | 4 | 5;
  text: string;
}

export interface ListContent extends ContentItemBase {
  type: 'list';
  items: TextSegment[][]; // Array of arrays for nested or complex list items
  ordered?: boolean;
}

export interface CodeContent extends ContentItemBase {
  type: 'code';
  language: string;
  code: string;
  title?: string;
}

export interface AlertContent extends ContentItemBase {
  type: 'alert';
  kind: 'note' | 'warning' | 'important' | 'info';
  segments: TextSegment[];
}

export interface CollapsibleContent extends ContentItemBase {
  type: 'collapsible';
  titleSegments: TextSegment[];
  children: ContentItem[];
}

export interface ImagePlaceholderContent extends ContentItemBase {
  type: 'image_placeholder';
  src: string;
  alt: string;
  caption?: string;
}

export type ContentItem =
  | ParagraphContent
  | HeadingContent
  | ListContent
  | CodeContent
  | AlertContent
  | CollapsibleContent
  | ImagePlaceholderContent;

export interface TutorialPart {
  id: string;
  title: string;
  content: ContentItem[];
}

export interface TutorialSection {
  id: string;
  title: string;
  introduction?: TextSegment[];
  parts: TutorialPart[];
}

// Enum for navigation
export enum SectionId {
  INTRODUCTION = 'introduction',
  PART1_VIRTUALBOX = 'part1_virtualbox',
  PART2_WINDOWS_SERVER = 'part2_windows_server',
  PART3_MONGODB = 'part3_mongodb',
  PART4_VSCODE = 'part4_vscode',
  PART5_NODEJS_PROJECT = 'part5_nodejs_project',
  PART6_DB_STRUCTURE = 'part6_db_structure',
  CONCLUSION = 'conclusion',
  NOTES_FOR_TEACHER = 'notes_for_teacher',
}
