'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="btn btn-sm"
        style={{ width: '40px', height: '40px' }}
        aria-label="Toggle theme"
      >
        <div style={{ width: '20px', height: '20px' }} />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="btn btn-sm d-flex align-items-center justify-content-center"
      style={{
        width: '40px',
        height: '40px',
        border: '1px solid var(--clr-grey-7)',
        borderRadius: '8px',
        transition: 'all 0.3s ease'
      }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <FaSun size={20} style={{ color: 'var(--clr-primary-5)' }} />
      ) : (
        <FaMoon size={20} style={{ color: 'var(--clr-primary-3)' }} />
      )}
    </button>
  );
}
