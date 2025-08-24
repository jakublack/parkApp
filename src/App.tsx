import { ErrorBoundary } from './components/ErrorBoundary';
import { ErrorProvider } from './contexts/ErrorContext';
import { Toast } from './components/Toast';
import { AppRouter } from './components/AppRouter';

function App() {
  return (
    <ErrorProvider>
      <ErrorBoundary>
        <AppRouter />
        <Toast />
      </ErrorBoundary>
    </ErrorProvider>
  );
}

export default App;
