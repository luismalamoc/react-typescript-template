import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

// Import pages
import { TaskDashboard } from '@/features/tasks';

// Auth pages
const Login = React.lazy(() => import('@/features/auth/pages/Login'));
const Register = React.lazy(() => import('@/features/auth/pages/Register'));
const ForgotPassword = React.lazy(() => import('@/features/auth/pages/ForgotPassword'));

// Protected route wrapper
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected routes */}
        <Route 
          path="/tasks" 
          element={
            <ProtectedRoute>
              <TaskDashboard />
            </ProtectedRoute>
          } 
        />

        {/* 404 route */}
        <Route path="*" element={<div className="flex h-screen items-center justify-center">Page not found</div>} />
      </Routes>
    </React.Suspense>
  );
};

export default AppRoutes;
