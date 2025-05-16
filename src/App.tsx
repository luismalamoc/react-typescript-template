import React from 'react';
import { useLocation } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  const location = useLocation();
  const isAuthPage = 
    location.pathname === '/login' || 
    location.pathname === '/register' || 
    location.pathname === '/' ||
    location.pathname === '/forgot-password';

  // Don't use MainLayout for auth pages
  if (isAuthPage) {
    return <AppRoutes />;
  }

  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
};

export default App;
