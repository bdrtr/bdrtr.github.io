import { Navigate, useLocation } from 'react-router';
import { isAuthenticated } from '../utils/adminAuth';
import type { PropsWithChildren } from 'react';

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const location = useLocation();
  if (!isAuthenticated()) {
    return <Navigate to="/admin-login" replace state={{ from: location }} />;
  }
  return <>{children}</>;
} 