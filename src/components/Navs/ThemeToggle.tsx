import { memo } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = memo(function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2 theme-toggle-btn"
      style={{
        borderRadius: '50px',
        padding: '8px 16px',
        border: '2px solid',
        transition: 'all 0.3s ease',
        minWidth: '60px',
        justifyContent: 'center',
        background: 'rgba(108, 108, 108, 0.1)',
        backdropFilter: 'blur(10px)'
      }}
      title={isDarkMode ? 'Switch to Day Mode' : 'Switch to Night Mode'}
    >
      {isDarkMode ? (
        <>
          <i className="bi bi-sun-fill text-secondary"></i>
          <span className="d-none d-sm-inline">Day</span>
        </>
      ) : (
        <>
          <i className="bi bi-moon-fill text-primary"></i>
          <span className="d-none d-sm-inline">Night</span>
        </>
      )}
    </button>
  );
});

export default ThemeToggle; 