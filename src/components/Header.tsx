import React from 'react';
import { Shield, Lock, Unlock } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="relative">
          <Shield className="w-12 h-12 text-blue-600" />
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Lock className="w-3 h-3 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          CipherForge
        </h1>
      </div>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Professional-grade encryption and decryption tool with multiple cipher methods. 
        Secure your messages with military-grade algorithms.
      </p>
    </header>
  );
};