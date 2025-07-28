'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page instead of dashboard
    router.push('/login');
  }, [router]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      margin: 0,
      padding: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      <div style={{
        textAlign: 'center',
        color: '#ffffff',
        padding: '2rem',
      }}>
        <h1 style={{ 
          fontSize: 48, 
          fontWeight: 700, 
          marginBottom: 16,
          letterSpacing: -1,
          textShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}>
          AV+V Platform
        </h1>
        <p style={{ 
          fontSize: 20, 
          opacity: 0.9,
          fontWeight: 400,
          letterSpacing: 0.2,
        }}>
          Redirecting to login...
        </p>
      </div>
    </div>
  );
}
