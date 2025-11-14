import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import MainLayout from './components/MainLayout';
import { ErrorBoundary } from './components/ErrorBoundary';

// Dynamic imports for better code splitting
const Header = dynamic(() => import('@/src/components/headers/Header'), {
  loading: () => <div className="py-5"><div className="container"><div className="text-center">Loading...</div></div></div>,
});

const About = dynamic(() => import('@/src/components/Main/About'), {
  loading: () => <div className="py-5"><div className="container"><div className="text-center">Loading...</div></div></div>,
});

const CallToAction = dynamic(() => import('@/src/components/Main/CallToAction'), {
  loading: () => <div className="py-5"><div className="container"><div className="text-center">Loading...</div></div></div>,
});

const LoadingFallback = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default function Home() {
  return (
    <ErrorBoundary>
      <MainLayout>
        <Suspense fallback={<LoadingFallback />}>
          <Header />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <CallToAction />
        </Suspense>
      </MainLayout>
    </ErrorBoundary>
  );
}

