'use client';

import React from 'react';

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-indigo-900 flex items-center justify-center z-50">
    <div className="text-center">
      <img src="/logo.png" alt="SocialBoost Logo" className="w-32 h-32 mb-4 animate-pulse" />
      <p className="text-white text-2xl font-bold">Loading...</p>
    </div>
  </div>
);

export default LoadingScreen;