import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from '../LoginForm';
import { PilotDashboard } from '../PilotDashboard';
import { ProtectedRoute } from '../ProtectedRoute';
import { useAuth } from '../../hooks/useAuth';

export const AppRouter = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <LoginForm />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <PilotDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <Navigate to={isAuthenticated ? '/dashboard' : '/login'} replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
