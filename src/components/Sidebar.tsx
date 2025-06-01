import React from 'react';
import { TutorialSection, SectionId } from '../types';

interface SidebarProps {
  sections: TutorialSection[];
  activeSectionId: SectionId;
  onSectionSelect: (id: SectionId) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ sections, activeSectionId, onSectionSelect }) => {
  const courseInfo = "Bases de Datos No Estructuradas (TI3032/D-IEI-N3-P2-C2/D La Serena IEI)";
  return (
    <aside className="w-full md:w-64 lg:w-72 bg-neutral-900 text-gray-50 p-6 space-y-4 h-screen overflow-y-auto sticky top-0">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-white leading-tight">
          Tutorial Práctico: Configuración de Entorno de Desarrollo con VirtualBox, Windows Server 2022, VS Code y MongoDB
        </h1>
        <p className="text-xs text-neutral-400 mt-1 leading-tight">
          {courseInfo}
        </p>
      </div>
      <nav>
        <ul>
          {sections.map((section) => (
            <li key={section.id} className="my-1">
              <button
                onClick={() => onSectionSelect(section.id as SectionId)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${activeSectionId === section.id 
                    ? 'bg-red-600 text-white shadow-md' 
                    : 'text-neutral-300 hover:bg-neutral-700 hover:text-white focus:bg-neutral-700 focus:text-white focus:outline-none'
                  }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};