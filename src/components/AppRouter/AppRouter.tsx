import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from '../LoginForm';
import { PilotDashboard } from '../PilotDashboard';
import { useAuth } from '../../hooks/useAuth';

export const AppRouter = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/dashboard" element={<PilotDashboard />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginForm />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
