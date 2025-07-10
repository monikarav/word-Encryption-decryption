export interface EncryptionMethod {
  id: string;
  name: string;
  description: string;
  requiresKey: boolean;
  keyPlaceholder?: string;
}

export interface EncryptionResult {
  input: string;
  output: string;
  method: string;
  key?: string;
  timestamp: Date;
}