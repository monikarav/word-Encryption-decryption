import React from 'react';
import { EncryptionMethod } from '../types';

interface MethodSelectorProps {
  methods: EncryptionMethod[];
  selectedMethod: string;
  onMethodChange: (methodId: string) => void;
}

export const MethodSelector: React.FC<MethodSelectorProps> = ({
  methods,
  selectedMethod,
  onMethodChange
}) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        Encryption Method
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => onMethodChange(method.id)}
            className={`p-4 rounded-xl border-2 transition-all duration-200 text-left hover:shadow-md ${
              selectedMethod === method.id
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="font-semibold text-gray-800 mb-1">{method.name}</div>
            <div className="text-sm text-gray-600">{method.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
};