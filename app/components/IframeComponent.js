/* This example requires Tailwind CSS v2.0+ */
'use client';
import React from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function IframeComponent({ videoId = '9bZkp7q19f0' }) {
  return (
    <div className="relative bg-gray-50">
      <main>
        <div style={{ width: '100%', height: '100vh' }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Youtube"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </div>
      </main>
    </div>
  );
}
