export class CipherUtils {
  // Caesar Cipher
  static caesarCipher(text: string, shift: number, decrypt: boolean = false): string {
    if (decrypt) shift = -shift;
    
    return text.replace(/[a-zA-Z]/g, (char) => {
      const start = char <= 'Z' ? 65 : 97;
      const code = char.charCodeAt(0);
      let shifted = ((code - start + shift) % 26 + 26) % 26;
      return String.fromCharCode(start + shifted);
    });
  }

  // ROT13
  static rot13(text: string): string {
    return this.caesarCipher(text, 13);
  }

  // Base64
  static base64Encode(text: string): string {
    return btoa(unescape(encodeURIComponent(text)));
  }

  static base64Decode(text: string): string {
    try {
      return decodeURIComponent(escape(atob(text)));
    } catch (e) {
      throw new Error('Invalid Base64 string');
    }
  }

  // Atbash Cipher
  static atbash(text: string): string {
    return text.replace(/[a-zA-Z]/g, (char) => {
      if (char >= 'A' && char <= 'Z') {
        return String.fromCharCode(25 - (char.charCodeAt(0) - 65) + 65);
      } else if (char >= 'a' && char <= 'z') {
        return String.fromCharCode(25 - (char.charCodeAt(0) - 97) + 97);
      }
      return char;
    });
  }

  // Simple Substitution Cipher
  static substitutionCipher(text: string, key: string, decrypt: boolean = false): string {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const keyUpper = key.toUpperCase().replace(/[^A-Z]/g, '');
    
    if (keyUpper.length !== 26) {
      throw new Error('Key must contain exactly 26 unique letters');
    }
    
    const fromAlphabet = decrypt ? keyUpper : alphabet;
    const toAlphabet = decrypt ? alphabet : keyUpper;
    
    return text.replace(/[a-zA-Z]/g, (char) => {
      const isUpper = char === char.toUpperCase();
      const index = fromAlphabet.indexOf(char.toUpperCase());
      const newChar = index !== -1 ? toAlphabet[index] : char;
      return isUpper ? newChar : newChar.toLowerCase();
    });
  }

  // Vigenère Cipher
  static vigenereCipher(text: string, key: string, decrypt: boolean = false): string {
    const keyUpper = key.toUpperCase().replace(/[^A-Z]/g, '');
    if (!keyUpper) throw new Error('Key must contain at least one letter');
    
    let keyIndex = 0;
    return text.replace(/[a-zA-Z]/g, (char) => {
      const isUpper = char === char.toUpperCase();
      const charCode = char.toUpperCase().charCodeAt(0) - 65;
      const keyChar = keyUpper[keyIndex % keyUpper.length].charCodeAt(0) - 65;
      
      let shifted = decrypt ? 
        (charCode - keyChar + 26) % 26 : 
        (charCode + keyChar) % 26;
      
      keyIndex++;
      const newChar = String.fromCharCode(shifted + 65);
      return isUpper ? newChar : newChar.toLowerCase();
    });
  }
}