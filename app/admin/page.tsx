'use client';

import { memo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { logout, isAuthenticated } from '@/src/utils/adminAuth';
import MainLayout from '../components/MainLayout';

const AdminDashboard = memo(function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/admin-login');
    }
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (!isAuthenticated()) {
    return null;
  }

  return (
    <MainLayout>
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Admin Panel</h2>
          <button className="btn btn-outline-secondary" onClick={handleLogout}>Logout</button>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow border-0 rounded-4 h-100">
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="fw-bold mb-2">Blog Posts</h5>
                <p className="text-muted flex-grow-1">Manage your blog posts, create, edit or delete articles.</p>
                <button className="btn btn-primary mt-auto" disabled>Coming Soon</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow border-0 rounded-4 h-100">
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="fw-bold mb-2">Projects</h5>
                <p className="text-muted flex-grow-1">Add new portfolio projects and update existing ones.</p>
                <button className="btn btn-primary mt-auto" disabled>Coming Soon</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow border-0 rounded-4 h-100">
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="fw-bold mb-2">Site Settings</h5>
                <p className="text-muted flex-grow-1">Adjust theme colors, SEO settings and more.</p>
                <button className="btn btn-primary mt-auto" disabled>Coming Soon</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
});

export default AdminDashboard;

