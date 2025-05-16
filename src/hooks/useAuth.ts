import { useState, useEffect } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null;
}

interface User {
  id: string;
  name: string;
  email: string;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    loading: true,
    user: null,
  });

  useEffect(() => {
    // In a real app, you would check for a token in localStorage
    // and validate it with your backend
    const checkAuth = async () => {
      const token = localStorage.getItem('auth-token');
      
      if (token) {
        // For demo purposes, we'll just consider having a token as being authenticated
        // In a real app, you would validate this token with your backend
        setAuthState({
          isAuthenticated: true,
          loading: false,
          user: {
            id: '1',
            name: 'Demo User',
            email: 'user@example.com',
          },
        });
      } else {
        setAuthState({
          isAuthenticated: false,
          loading: false,
          user: null,
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    // In a real app, you would make an API call to your backend
    // For demo purposes, we'll just set a token in localStorage
    if (email && password) {
      localStorage.setItem('auth-token', 'demo-token');
      setAuthState({
        isAuthenticated: true,
        loading: false,
        user: {
          id: '1',
          name: 'Demo User',
          email,
        },
      });
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string) => {
    // In a real app, you would make an API call to your backend
    // For demo purposes, we'll just set a token in localStorage
    if (name && email && password) {
      localStorage.setItem('auth-token', 'demo-token');
      setAuthState({
        isAuthenticated: true,
        loading: false,
        user: {
          id: '1',
          name,
          email,
        },
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('auth-token');
    setAuthState({
      isAuthenticated: false,
      loading: false,
      user: null,
    });
  };

  return {
    ...authState,
    login,
    register,
    logout,
  };
};
