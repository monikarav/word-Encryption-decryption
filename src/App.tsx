import React, { useState } from 'react';
import { Header } from './components/Header';
import { MethodSelector } from './components/MethodSelector';
import { TextInput } from './components/TextInput';
import { KeyInput } from './components/KeyInput';
import { ActionButtons } from './components/ActionButtons';
import { ResultDisplay } from './components/ResultDisplay';
import { ErrorMessage } from './components/ErrorMessage';
import { EncryptionMethod } from './types';
import { CipherUtils } from './utils/ciphers';

const ENCRYPTION_METHODS: EncryptionMethod[] = [
  {
    id: 'caesar',
    name: 'Caesar Cipher',
    description: 'Classic shift cipher with customizable offset',
    requiresKey: true,
    keyPlaceholder: 'Enter shift value (e.g., 3)'
  },
  {
    id: 'rot13',
    name: 'ROT13',
    description: 'Simple letter substitution with 13-position shift',
    requiresKey: false
  },
  {
    id: 'base64',
    name: 'Base64',
    description: 'Standard encoding for binary-to-text conversion',
    requiresKey: false
  },
  {
    id: 'atbash',
    name: 'Atbash Cipher',
    description: 'Ancient Hebrew cipher using alphabet reversal',
    requiresKey: false
  },
  {
    id: 'substitution',
    name: 'Substitution Cipher',
    description: 'Replace each letter with another letter',
    requiresKey: true,
    keyPlaceholder: 'Enter 26-letter substitution key'
  },
  {
    id: 'vigenere',
    name: 'Vigenère Cipher',
    description: 'Polyalphabetic cipher using a keyword',
    requiresKey: true,
    keyPlaceholder: 'Enter keyword (e.g., SECRET)'
  }
];

function App() {
  const [inputText, setInputText] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('caesar');
  const [encryptionKey, setEncryptionKey] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [lastOperation, setLastOperation] = useState<'encrypt' | 'decrypt' | null>(null);

  const currentMethod = ENCRYPTION_METHODS.find(m => m.id === selectedMethod)!;

  const handleEncrypt = () => {
    setError('');
    if (!inputText.trim()) {
      setError('Please enter text to encrypt');
      return;
    }

    try {
      let encrypted = '';
      
      switch (selectedMethod) {
        case 'caesar':
          const shift = parseInt(encryptionKey) || 3;
          encrypted = CipherUtils.caesarCipher(inputText, shift);
          break;
        case 'rot13':
          encrypted = CipherUtils.rot13(inputText);
          break;
        case 'base64':
          encrypted = CipherUtils.base64Encode(inputText);
          break;
        case 'atbash':
          encrypted = CipherUtils.atbash(inputText);
          break;
        case 'substitution':
          if (!encryptionKey.trim()) {
            setError('Please enter a substitution key');
            return;
          }
          encrypted = CipherUtils.substitutionCipher(inputText, encryptionKey);
          break;
        case 'vigenere':
          if (!encryptionKey.trim()) {
            setError('Please enter a keyword');
            return;
          }
          encrypted = CipherUtils.vigenereCipher(inputText, encryptionKey);
          break;
        default:
          setError('Unknown encryption method');
          return;
      }
      
      setResult(encrypted);
      setLastOperation('encrypt');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Encryption failed');
    }
  };

  const handleDecrypt = () => {
    setError('');
    if (!inputText.trim()) {
      setError('Please enter text to decrypt');
      return;
    }

    try {
      let decrypted = '';
      
      switch (selectedMethod) {
        case 'caesar':
          const shift = parseInt(encryptionKey) || 3;
          decrypted = CipherUtils.caesarCipher(inputText, shift, true);
          break;
        case 'rot13':
          decrypted = CipherUtils.rot13(inputText);
          break;
        case 'base64':
          decrypted = CipherUtils.base64Decode(inputText);
          break;
        case 'atbash':
          decrypted = CipherUtils.atbash(inputText);
          break;
        case 'substitution':
          if (!encryptionKey.trim()) {
            setError('Please enter a substitution key');
            return;
          }
          decrypted = CipherUtils.substitutionCipher(inputText, encryptionKey, true);
          break;
        case 'vigenere':
          if (!encryptionKey.trim()) {
            setError('Please enter a keyword');
            return;
          }
          decrypted = CipherUtils.vigenereCipher(inputText, encryptionKey, true);
          break;
        default:
          setError('Unknown decryption method');
          return;
      }
      
      setResult(decrypted);
      setLastOperation('decrypt');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Decryption failed');
    }
  };

  const handleClear = () => {
    setInputText('');
    setEncryptionKey('');
    setResult('');
    setError('');
    setLastOperation(null);
  };

  const handleMethodChange = (methodId: string) => {
    setSelectedMethod(methodId);
    setEncryptionKey('');
    setResult('');
    setError('');
    setLastOperation(null);
  };

  const isDisabled = !inputText.trim() || (currentMethod.requiresKey && !encryptionKey.trim());

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        
        <div className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm border border-gray-100">
          <MethodSelector
            methods={ENCRYPTION_METHODS}
            selectedMethod={selectedMethod}
            onMethodChange={handleMethodChange}
          />
          
          <TextInput
            value={inputText}
            onChange={setInputText}
            placeholder="Enter your text here..."
            label="Input Text"
          />
          
          <KeyInput
            value={encryptionKey}
            onChange={setEncryptionKey}
            placeholder={currentMethod.keyPlaceholder || ''}
            required={currentMethod.requiresKey}
          />
          
          <ErrorMessage message={error} onClose={() => setError('')} />
          
          <ActionButtons
            onEncrypt={handleEncrypt}
            onDecrypt={handleDecrypt}
            onClear={handleClear}
            disabled={isDisabled}
          />
          
          <ResultDisplay
            result={result}
            label={lastOperation === 'encrypt' ? 'Encrypted Text' : 'Decrypted Text'}
          />
        </div>
        
        <footer className="text-center mt-8 text-gray-500">
          <p className="text-sm">
            Built with React, TypeScript, and Tailwind CSS • 
            <span className="ml-2">Professional encryption for secure communication</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;