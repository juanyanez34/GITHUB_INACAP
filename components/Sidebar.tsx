
import React from 'react';
import { LogoIcon, ChatIcon, AudioIcon, ImageIcon, StarIcon, HistoryIcon, InfoIcon, ChevronRightIcon } from './icons/SidebarIcons';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className={`flex flex-col items-center justify-center w-full h-16 p-2 rounded-lg 
                ${active ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} 
                transition-colors duration-150 ease-in-out`}
  >
    {icon}
  </button>
);

export const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState('Star');

  return (
    <div className="flex flex-col bg-gray-800 w-20 p-3 space-y-3 border-r border-gray-700 shrink-0">
      <div className="mb-4">
        <LogoIcon className="w-10 h-10 mx-auto text-white" />
      </div>
      <NavItem icon={<ChatIcon className="w-6 h-6" />} label="Chat" active={activeItem === 'Chat'} onClick={() => setActiveItem('Chat')} />
      <NavItem icon={<AudioIcon className="w-6 h-6" />} label="Audio" active={activeItem === 'Audio'} onClick={() => setActiveItem('Audio')} />
      <NavItem icon={<ImageIcon className="w-6 h-6" />} label="Image" active={activeItem === 'Image'} onClick={() => setActiveItem('Image')} />
      <NavItem icon={<StarIcon className="w-6 h-6" />} label="Showcase" active={activeItem === 'Star'} onClick={() => setActiveItem('Star')} />
      <NavItem icon={<HistoryIcon className="w-6 h-6" />} label="History" active={activeItem === 'History'} onClick={() => setActiveItem('History')} />
      
      <div className="flex-grow"></div> {/* Spacer */}

      <NavItem icon={<InfoIcon className="w-6 h-6" />} label="Info" active={activeItem === 'Info'} onClick={() => setActiveItem('Info')} />
      <NavItem icon={<ChevronRightIcon className="w-6 h-6" />} label="Collapse" active={activeItem === 'Collapse'} onClick={() => setActiveItem('Collapse')} />
    </div>
  );
};