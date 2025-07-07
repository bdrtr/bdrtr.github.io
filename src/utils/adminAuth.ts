export function login(email: string, password: string): boolean {
  if (email === 'bedir@s.com' && password === '2001bedir') {
    localStorage.setItem('isAdmin', 'true');
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem('isAdmin');
}

export function isAuthenticated(): boolean {
  return localStorage.getItem('isAdmin') === 'true';
} 