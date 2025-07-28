'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Demo login - accept any username/password for now
    if (username && password) {
      // Simulate successful login
      router.push('/dashboard');
    } else {
      setError('Please enter both username and password');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        margin: 0,
        padding: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 400,
          padding: '3rem 2rem',
          borderRadius: 20,
          background: 'rgba(255, 255, 255, 0.95)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            marginBottom: 12,
            letterSpacing: -0.5,
            color: '#1a1a1a',
            textAlign: 'center',
          }}
        >
          AV+V Login
        </div>
        <div
          style={{
            fontSize: 16,
            color: '#666',
            marginBottom: 32,
            letterSpacing: 0.2,
            textAlign: 'center',
          }}
        >
          Welcome back! Please sign in to continue.
        </div>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div style={{ marginBottom: 20 }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 18px',
                borderRadius: 12,
                border: '2px solid #e1e5e9',
                fontSize: 16,
                outline: 'none',
                background: '#ffffff',
                color: '#1a1a1a',
                transition: 'all 0.2s ease',
                boxSizing: 'border-box',
              }}
              required
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 18px',
                borderRadius: 12,
                border: '2px solid #e1e5e9',
                fontSize: 16,
                outline: 'none',
                background: '#ffffff',
                color: '#1a1a1a',
                transition: 'all 0.2s ease',
                boxSizing: 'border-box',
              }}
              required
            />
          </div>
          {error && (
            <div style={{ 
              color: '#dc3545', 
              marginBottom: 20, 
              textAlign: 'center',
              fontSize: 14,
              padding: '8px 12px',
              background: '#f8d7da',
              borderRadius: 8,
              border: '1px solid #f5c6cb'
            }}>
              {error}
            </div>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '16px 0',
              borderRadius: 12,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#ffffff',
              border: 'none',
              fontWeight: 600,
              fontSize: 18,
              letterSpacing: 0.5,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
            }}
          >
            Sign In
          </button>
        </form>
        <div style={{ 
          width: '100%', 
          marginTop: 24, 
          display: 'flex', 
          justifyContent: 'space-between',
          fontSize: 14,
        }}>
          <button
            type="button"
            style={{
              background: 'none',
              border: 'none',
              color: '#667eea',
              cursor: 'pointer',
              fontSize: 14,
              textDecoration: 'underline',
              padding: 0,
            }}
            onClick={() => alert('Forgot password functionality coming soon!')}
          >
            Forgot password?
          </button>
          <button
            type="button"
            style={{
              background: 'none',
              border: 'none',
              color: '#764ba2',
              cursor: 'pointer',
              fontSize: 14,
              textDecoration: 'underline',
              padding: 0,
            }}
            onClick={() => alert('Sign up functionality coming soon!')}
          >
            Sign up
          </button>
        </div>
        <div style={{ 
          marginTop: 20, 
          fontSize: 12, 
          color: '#888', 
          textAlign: 'center',
          padding: '8px 12px',
          background: '#f8f9fa',
          borderRadius: 8,
          border: '1px solid #e9ecef'
        }}>
          Demo: Enter any username and password to login
        </div>
      </div>
    </div>
  );
}