import React from 'react';

export function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function GitHubIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LeetCodeIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .749 1.875 5.86 5.86 0 0 0 1.374 1.55l3.874 3.125a1.375 1.375 0 0 0 1.749-.062 1.375 1.375 0 0 0 .062-1.937l-3.5-2.812a3.125 3.125 0 0 1-.75-.875 3.25 3.25 0 0 1-.375-1.125 3.375 3.375 0 0 1 .188-1.562 3.125 3.125 0 0 1 .687-1.188l3.625-3.875 4.5-4.813a1.375 1.375 0 0 0-.875-2.25zM16.5 7.5a1.375 1.375 0 0 0-.974.402l-4.5 4.5a1.375 1.375 0 0 0 0 1.948l4.5 4.5a1.375 1.375 0 0 0 1.948-1.948L13.924 13.35l3.524-3.524A1.375 1.375 0 0 0 16.5 7.5zm-5.125 5.125h11.25a1.375 1.375 0 0 0 0-2.75h-11.25a1.375 1.375 0 0 0 0 2.75z" />
    </svg>
  );
}

export function HackerRankIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.875 16.875H8.25V7.125h1.875v3.75h3.75V7.125h1.875v9.75h-1.875v-4.125h-3.75v4.125z" />
    </svg>
  );
}
