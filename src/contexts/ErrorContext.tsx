import { createContext, useContext, useState, type ReactNode } from 'react';

interface ErrorInfo {
  id: string;
  message: string;
  type: 'error' | 'warning' | 'info';
  timestamp: number;
}

interface ErrorContextType {
  errors: ErrorInfo[];
  addError: (message: string, type?: ErrorInfo['type']) => void;
  removeError: (id: string) => void;
  clearErrors: () => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};

interface ErrorProviderProps {
  children: ReactNode;
}

export const ErrorProvider = ({ children }: ErrorProviderProps) => {
  const [errors, setErrors] = useState<ErrorInfo[]>([]);

  const addError = (message: string, type: ErrorInfo['type'] = 'error') => {
    const id = Date.now().toString();
    const error: ErrorInfo = {
      id,
      message,
      type,
      timestamp: Date.now(),
    };

    setErrors(prev => [...prev, error]);

    // Auto-remove error after 5 seconds
    setTimeout(() => {
      removeError(id);
    }, 5000);
  };

  const removeError = (id: string) => {
    setErrors(prev => prev.filter(error => error.id !== id));
  };

  const clearErrors = () => {
    setErrors([]);
  };

  return (
    <ErrorContext.Provider
      value={{ errors, addError, removeError, clearErrors }}
    >
      {children}
    </ErrorContext.Provider>
  );
};
