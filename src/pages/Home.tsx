import React from 'react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { authState, isLoading } = useAuth();
  
  // 1. Handle loading state (Essential for Auth)
  if (isLoading) {
    return <div className="flex justify-center p-4">Loading...</div>;
  }

  // 2. Safely extract name with a fallback
  const displayName = authState?.userInfo?.displayName;

  return (
    <main className="container mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">
        Welcome, {displayName ? (
          <span className="text-blue-600">{displayName}!</span>
        ) : (
          'Guest user'
        )}
      </h1>
      <p className="mt-2 text-slate-500 text-sm">
        {displayName ? 'Great to see you again.' : 'Please sign in to access your dashboard.'}
      </p>
    </main>
  );
};

export default Home;
