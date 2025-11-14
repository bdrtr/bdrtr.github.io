'use client';

import { useState, memo } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/src/utils/adminAuth';

const AdminLogin = memo(function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = login(email, password);
    if (ok) {
      router.push('/admin');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="card shadow border-0" style={{ maxWidth: 420, width: '100%' }}>
        <div className="card-body p-5">
          <h3 className="fw-bold text-center mb-4">Admin Login</h3>
          {error && <div className="alert alert-danger py-2 text-center">{error}</div>}
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <div>
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="form-label fw-bold">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default AdminLogin;

