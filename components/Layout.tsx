
import React from 'react';
import { Sidebar } from './Sidebar';
import { ContentItemRenderer, SegmentRenderer } from './ContentRenderer';
import { TutorialSection, SectionId } from '../types';

interface LayoutProps {
  sections: TutorialSection[];
  activeSection: TutorialSection | undefined;
  activeSectionId: SectionId;
  onSectionSelect: (id: SectionId) => void;
}

export const Layout: React.FC<LayoutProps> = ({ sections, activeSection, activeSectionId, onSectionSelect }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-neutral-100">
      <Sidebar sections={sections} activeSectionId={activeSectionId} onSectionSelect={onSectionSelect} />
      <main className="flex-1 p-6 md:p-10 overflow-y-auto bg-neutral-100">
        {activeSection ? (
          <article className="bg-white p-6 md:p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
            <header className="mb-8 border-b border-neutral-200 pb-4">
              <h2 className="text-4xl font-bold text-neutral-800">{activeSection.title}</h2>
              {activeSection.introduction && (
                <p className="mt-3 text-lg text-neutral-600 leading-relaxed">
                  <SegmentRenderer segments={activeSection.introduction} />
                </p>
              )}
            </header>
            
            {activeSection.parts.map(part => (
              <section key={part.id} className="mb-8">
                {part.title && <h3 className="text-2xl font-semibold text-neutral-700 mb-4 mt-6 border-b border-neutral-200 pb-2">{part.title}</h3>}
                {part.content.map((item, index) => (
                  <ContentItemRenderer key={item.id || `part_content_${index}`} item={item} />
                ))}
              </section>
            ))}
          </article>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-xl text-neutral-500">Selecciona una sección del tutorial para comenzar.</p>
          </div>
        )}
      </main>
    </div>
  );
};