
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { TUTORIAL_DATA } from './constants';
import { SectionId, TutorialSection } from './types';

const App: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<SectionId>(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && Object.values(SectionId).includes(hash as SectionId)) {
      return hash as SectionId;
    }
    return TUTORIAL_DATA[0]?.id as SectionId || SectionId.INTRODUCTION;
  });

  const activeSection = TUTORIAL_DATA.find(sec => sec.id === activeSectionId);

  const handleSectionSelect = (id: SectionId) => {
    setActiveSectionId(id);
    window.location.hash = id;
    // Scroll to top of content area
    const mainContentArea = document.querySelector('main');
    if (mainContentArea) {
      mainContentArea.scrollTo(0, 0);
    }
  };
  
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash && Object.values(SectionId).includes(hash as SectionId)) {
        setActiveSectionId(hash as SectionId);
      } else if (!hash && TUTORIAL_DATA.length > 0) {
         // Default to first section if hash is invalid or empty
        setActiveSectionId(TUTORIAL_DATA[0].id as SectionId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check in case the hash was set before listener attached, or by direct URL
    handleHashChange(); 

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);


  return (
    <Layout
      sections={TUTORIAL_DATA}
      activeSection={activeSection}
      activeSectionId={activeSectionId}
      onSectionSelect={handleSectionSelect}
    />
  );
};

export default App;
