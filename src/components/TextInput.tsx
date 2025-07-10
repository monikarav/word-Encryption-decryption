import React from 'react';
import { FileText, X } from 'lucide-react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  label
}) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        <FileText className="inline w-4 h-4 mr-2" />
        {label}
      </label>
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-32 p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};