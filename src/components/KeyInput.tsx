import React from 'react';
import { Key, X } from 'lucide-react';

interface KeyInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required: boolean;
}

export const KeyInput: React.FC<KeyInputProps> = ({
  value,
  onChange,
  placeholder,
  required
}) => {
  if (!required) return null;

  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        <Key className="inline w-4 h-4 mr-2" />
        Encryption Key
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};