import React from 'react';
import { Lock, Unlock, RotateCcw } from 'lucide-react';

interface ActionButtonsProps {
  onEncrypt: () => void;
  onDecrypt: () => void;
  onClear: () => void;
  disabled: boolean;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onEncrypt,
  onDecrypt,
  onClear,
  disabled
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <button
        onClick={onEncrypt}
        disabled={disabled}
        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        <Lock className="w-5 h-5" />
        Encrypt
      </button>
      <button
        onClick={onDecrypt}
        disabled={disabled}
        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        <Unlock className="w-5 h-5" />
        Decrypt
      </button>
      <button
        onClick={onClear}
        className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200 border-2 border-gray-200 hover:border-gray-300"
      >
        <RotateCcw className="w-5 h-5" />
        Clear
      </button>
    </div>
  );
};