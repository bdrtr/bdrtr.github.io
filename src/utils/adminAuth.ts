export function login(email: string, password: string): boolean {
  if (typeof window === 'undefined') return false;
  if (email === 'bedir@s.com' && password === '2001bedir') {
    localStorage.setItem('isAdmin', 'true');
    return true;
  }
  return false;
}

export function logout() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('isAdmin');
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('isAdmin') === 'true';
} 