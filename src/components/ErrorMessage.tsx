import React from 'react';
import { AlertCircle, X } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onClose: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-xl">
      <div className="flex items-start">
        <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 mr-3" />
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-red-800 mb-1">Error</h3>
          <p className="text-sm text-red-700">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-red-400 hover:text-red-600 transition-colors duration-200"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};