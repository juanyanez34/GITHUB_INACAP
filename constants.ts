
import { AppCardData, TabCategory } from './types';

export const APP_CARDS_DATA: AppCardData[] = [
  {
    id: 'mumble-jumble',
    imageUrl: 'https://picsum.photos/seed/mumble/64/64',
    title: 'Mumble Jumble',
    description: 'A playground to discover the range of creative voices that the Gemini native audio out has to offer.',
    tags: ['Gemini 2.5 Flash Audio', 'Imagen', 'Live API'],
  },
  {
    id: 'live-audio',
    imageUrl: 'https://picsum.photos/seed/audio/64/64',
    title: 'Live Audio',
    description: 'Experience real-time voice chat with 3D visuals react to your conversation, bringing AI interaction to life.',
    tags: ['Gemini 2.5 Flash Audio', 'Live API'],
  },
  {
    id: 'prompt-dj',
    imageUrl: 'https://picsum.photos/seed/dj/64/64',
    title: 'PromptDJ',
    description: 'Steer a continuous stream of music with text prompts.',
    tags: ['Lyria', 'Music generation'],
  },
  {
    id: 'prompt-dj-midi',
    imageUrl: 'https://picsum.photos/seed/midi/64/64',
    title: 'PromptDJ MIDI',
    description: 'Control real time music with a MIDI controller.',
    tags: ['Lyria', 'Music generation'],
  },
  {
    id: 'thinking-space',
    imageUrl: 'https://picsum.photos/seed/think/64/64',
    title: 'Thinking Space',
    description: 'Search a custom set of images using natural language.',
    tags: ['Gemini 2.5 Flash'],
  },
  {
    id: 'mcp-maps-basic',
    imageUrl: 'https://picsum.photos/seed/maps/64/64',
    title: 'MCP Maps Basic',
    description: 'MCP & Gemini power your global guide! AI answers geo-queries on interactive maps. Explore, discover, and see the world anew.',
    tags: ['Gemini 2.5 Pro', 'MCP', 'Google Maps'],
  },
  {
    id: 'chatterbots',
    imageUrl: 'https://picsum.photos/seed/chatbots/64/64',
    title: 'ChatterBots',
    description: 'An interactive tool that allows you to design, test, and banter with custom AI characters on the fly.',
    tags: ['Gemini 2.5 Flash Audio', 'Live API'],
  },
  {
    id: 'dictation-app',
    imageUrl: 'https://picsum.photos/seed/dictate/64/64',
    title: 'Dictation App',
    description: 'Effortless dictation powered by Gemini. Turn long rambling recordings into perfectly transcribed notes.',
    tags: ['Gemini 2.5 Flash', 'Audio transcription'],
  },
  {
    id: 'video-learning',
    imageUrl: 'https://picsum.photos/seed/learn/64/64',
    title: 'Video to Learning App',
    description: 'Instantly turn YouTube videos into fun learning apps using AI. Explore concepts visually and learn actively!',
    tags: ['Gemini 2.5 Pro', 'AI Education'],
  },
  {
    id: 'gemini-95',
    imageUrl: 'https://picsum.photos/seed/retro/64/64',
    title: 'Gemini 95',
    description: 'Explore a retro OS that brings back nostalgic memories with an AI twist.',
    tags: ['Gemini 2.5 Flash', 'Retro UI'],
  },
  {
    id: 'tiny-cats',
    imageUrl: 'https://picsum.photos/seed/cats/64/64',
    title: 'Tiny Cats',
    description: 'Tiny cats explain! Get fun, illustrated slideshows breaking down complex topics with adorable feline metaphors.',
    tags: ['Imagen', 'Education', 'Fun'],
  },
  {
    id: 'magical-gif-maker',
    imageUrl: 'https://picsum.photos/seed/gif/64/64',
    title: 'Magical GIF Maker',
    description: 'Instantly transform your text prompts into charming animated doodles with Gemini.',
    tags: ['Imagen', 'Animation', 'Creative Tool'],
  },
];

export const TAB_CATEGORIES: TabCategory[] = [
  TabCategory.SHOWCASE,
  TabCategory.YOUR_APPS,
  TabCategory.RECENT_APPS,
  TabCategory.FAQ,
];
