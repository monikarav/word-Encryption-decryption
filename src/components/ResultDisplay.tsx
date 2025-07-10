import React, { useState } from 'react';
import { Copy, Check, FileText } from 'lucide-react';

interface ResultDisplayProps {
  result: string;
  label: string;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, label }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (!result) return null;

  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        <FileText className="inline w-4 h-4 mr-2" />
        {label}
      </label>
      <div className="relative">
        <div className="w-full h-32 p-4 bg-gray-50 border-2 border-gray-200 rounded-xl overflow-auto">
          <pre className="whitespace-pre-wrap text-gray-800 font-mono text-sm">
            {result}
          </pre>
        </div>
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 flex items-center gap-1 bg-white px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200 text-sm"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-green-600">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};