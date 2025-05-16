import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  children?: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to={isAuthenticated ? '/tasks' : '/'} className="flex items-center space-x-2">
            <span className="text-xl font-bold">React TypeScript Template</span>
          </Link>
          
          {isAuthenticated && (
            <nav className="hidden md:flex gap-6">
              <Link to="/tasks" className="text-sm font-medium transition-colors hover:text-primary">
                Tasks
              </Link>
            </nav>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          {children}
          
          {isAuthenticated && (
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
