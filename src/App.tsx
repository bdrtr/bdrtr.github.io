import { createBrowserRouter, RouterProvider } from 'react-router';
import { lazy, Suspense, memo } from 'react';
import './App.css'
import './css/professional-theme.css'
import MainLayout from './layouts/MainLayout';
import { ThemeProvider } from './contexts/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const routes = [{
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <Home />
        </Suspense>
      )
    },
    {
      path: 'contact',
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      )
    },
    {
      path: 'projects',
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <Projects />
        </Suspense>
      )
    },
    {
      path: 'resume',
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <Resume />
        </Suspense>
      )
    },
    {
      path: 'blog',
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <Blog />
        </Suspense>
      )
    },
    {
      path: 'blog/:id',
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <BlogPost />
        </Suspense>
      )
    },
    {
      path: 'admin-login',
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <AdminLogin />
        </Suspense>
      )
    },
    {
      path: 'admin',
      element: (
        <ProtectedRoute>
          <Suspense fallback={<LoadingSpinner />}>
            <AdminDashboard />
          </Suspense>
        </ProtectedRoute>
      )
    },
  ]
}];

// Memoize router creation to prevent unnecessary re-creation
const router = createBrowserRouter(routes);

const App = memo(function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
});

export default App;
