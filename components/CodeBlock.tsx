
import React, { useState, useCallback } from 'react';
import { CodeContent } from '../types';
import { ClipboardIcon, CheckIcon } from './icons';

interface CodeBlockProps {
  item: CodeContent;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ item }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(item.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [item.code]);

  return (
    <div className="bg-neutral-900 rounded-lg shadow-lg my-4 overflow-hidden">
      {item.title && (
        <div className="bg-neutral-800 text-neutral-300 px-4 py-2 text-sm font-mono">
          {item.title}
        </div>
      )}
      <div className="relative p-4">
        <pre className="text-sm text-neutral-100 overflow-x-auto whitespace-pre-wrap break-all">
          <code>{item.code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 bg-neutral-700 hover:bg-neutral-600 rounded-md text-neutral-300 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
          aria-label={copied ? "Copiado" : "Copiar código"}
        >
          {copied ? <CheckIcon className="w-4 h-4 text-green-400" /> : <ClipboardIcon className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};