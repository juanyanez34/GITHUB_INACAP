
import React, { useState, useCallback } from 'react';
import { AppCardData, TabCategory, GeminiResponse as GeminiResponseType, GroundingChunk } from '../types';
import { APP_CARDS_DATA, TAB_CATEGORIES } from '../constants';
import { AppCard } from './AppCard';
import { TabNavigation } from './TabNavigation';
import { PlusIcon, GameControllerIcon, CodeBracketIcon, PhotoIcon, SparklesIcon, ArrowRightIcon, SearchIcon } from './icons/MiscIcons';
import { LoadingSpinner } from './LoadingSpinner';
import { GeminiService } from '../services/geminiService';

const geminiService = new GeminiService();

export const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabCategory>(TabCategory.SHOWCASE);
  const [prompt, setPrompt] = useState<string>('');
  const [geminiResponse, setGeminiResponse] = useState<GeminiResponseType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmitPrompt = useCallback(async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setError(null);
    setGeminiResponse(null);
    try {
      const response = await geminiService.generateContent(prompt, true); // enable Google Search
      setGeminiResponse(response);
    } catch (err) {
      console.error("Error calling Gemini API:", err);
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  const quickActions = [
    { label: "Start from a template", icon: <PlusIcon className="w-5 h-5 mr-2" /> },
    { label: "Dynamic text game using Gemini", icon: <GameControllerIcon className="w-5 h-5 mr-2" /> },
    { label: "Gemini powered code review", icon: <CodeBracketIcon className="w-5 h-5 mr-2" /> },
    { label: "Imagen pixel art maker", icon: <PhotoIcon className="w-5 h-5 mr-2" /> },
  ];

  const displayedApps = activeTab === TabCategory.SHOWCASE ? APP_CARDS_DATA : [];

  return (
    <div className="p-6 md:p-10 space-y-8 bg-gray-800 min-h-full">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white flex items-center justify-center">
          Build apps with Gemini
          <span className="ml-3 px-3 py-1 text-xs font-semibold tracking-wider text-blue-300 bg-blue-800 bg-opacity-50 rounded-full uppercase">
            Experimental
          </span>
        </h1>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={prompt}
            onChange={handlePromptChange}
            placeholder="Builds apps using the SDK without a key, try “an image generator that uses Imagen”"
            className="w-full p-4 pr-28 text-lg text-gray-100 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
          />
          <button
            onClick={handleSubmitPrompt}
            disabled={isLoading}
            className="absolute right-2.5 top-1/2 transform -translate-y-1/2 flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? <LoadingSpinner className="w-5 h-5 mr-2" /> : <SparklesIcon className="w-5 h-5 mr-2" />}
            Build
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
      
      {isLoading && (
        <div className="flex justify-center items-center p-4">
          <LoadingSpinner className="w-8 h-8 text-blue-500" />
          <p className="ml-3 text-gray-300">Gemini is thinking...</p>
        </div>
      )}

      {error && (
        <div className="max-w-3xl mx-auto p-4 bg-red-800 border border-red-700 rounded-lg text-red-100">
          <p className="font-semibold">Error:</p>
          <p>{error}</p>
        </div>
      )}

      {geminiResponse && (
        <div className="max-w-3xl mx-auto p-6 bg-gray-750 border border-gray-600 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">Gemini's Response:</h3>
          <p className="text-gray-200 whitespace-pre-wrap leading-relaxed">{geminiResponse.text}</p>
          {geminiResponse.candidates?.[0]?.groundingMetadata?.groundingChunks && 
           geminiResponse.candidates[0].groundingMetadata.groundingChunks.length > 0 && (
            <div className="mt-4 pt-3 border-t border-gray-600">
              <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center">
                <SearchIcon className="w-4 h-4 mr-2 text-green-400"/>
                Retrieved from the web:
              </h4>
              <ul className="list-disc list-inside space-y-1">
                {geminiResponse.candidates[0].groundingMetadata.groundingChunks.map((chunk: GroundingChunk, index: number) => (
                  chunk.web && (
                    <li key={index} className="text-xs">
                      <a href={chunk.web.uri} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">
                        {chunk.web.title || chunk.web.uri}
                      </a>
                    </li>
                  )
                ))}
              </ul>
            </div>
          )}
        </div>
      )}


      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4">
        {quickActions.map(action => (
          <button
            key={action.label}
            className="flex items-center text-sm bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white px-4 py-2.5 rounded-lg transition-colors"
          >
            {action.icon}
            {action.label}
          </button>
        ))}
      </div>

      <TabNavigation activeTab={activeTab} onTabClick={setActiveTab} />

      {activeTab === TabCategory.SHOWCASE && (
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {APP_CARDS_DATA.map((app) => (
              <AppCard key={app.id} {...app} />
            ))}
          </div>
      )}
       {(activeTab !== TabCategory.SHOWCASE) && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">Content for {activeTab} will be available soon.</p>
        </div>
      )}

    </div>
  );
};