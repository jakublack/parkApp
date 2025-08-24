import { useEffect } from 'react';
import { X, AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { useError } from '../../contexts/ErrorContext';

const iconMap = {
  error: AlertTriangle,
  warning: AlertCircle,
  info: Info,
};

const colorMap = {
  error: 'bg-red-50 border-red-200 text-red-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800',
};

export const Toast = () => {
  const { errors, removeError } = useError();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (errors.length > 0) {
          removeError(errors[errors.length - 1].id);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [errors, removeError]);

  if (errors.length === 0) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {errors.map(error => {
        const Icon = iconMap[error.type];
        const colorClass = colorMap[error.type];

        return (
          <div
            key={error.id}
            className={`max-w-sm p-4 rounded-lg border shadow-lg animate-in slide-in-from-right duration-300 ${colorClass}`}
          >
            <div className="flex items-start">
              <Icon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium break-words">
                  {error.message}
                </p>
              </div>

              <button
                onClick={() => removeError(error.id)}
                className="ml-3 flex-shrink-0 text-current hover:opacity-70 transition-opacity"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
