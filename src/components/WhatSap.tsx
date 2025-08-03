import React from 'react';

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/201050206655"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center 
      animate-bounce hover:animate-pulse fixed bottom-6 right-6 z-50"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="currentColor"
      >
        <path d="M12 2.1A9.9 9.9 0 002.1 12c0 1.75.46 3.46 1.33 4.97L2 22l5.13-1.41A9.9 9.9 0 1012 2.1zm0 18.1c-1.61 0-3.18-.43-4.54-1.25l-.32-.19-3.11.85.83-3.06-.2-.33A7.9 7.9 0 1112 20.2zm4.36-5.6c-.24-.12-1.41-.7-1.62-.78-.22-.08-.38-.12-.54.13-.16.24-.62.78-.76.94-.14.16-.28.18-.52.08a6.13 6.13 0 01-2.01-1.25 7.6 7.6 0 01-1.36-1.68c-.15-.25-.02-.38.11-.5.12-.12.27-.31.4-.47.13-.16.17-.28.25-.47.08-.19.04-.34-.02-.48-.07-.14-.56-1.36-.77-1.87-.2-.48-.41-.41-.56-.42-.15-.01-.32-.01-.5-.01-.18 0-.43.06-.66.31-.23.25-.87.82-.87 2s.9 2.31 1.03 2.47c.13.16 1.78 2.72 4.32 3.71.6.23 1.07.37 1.44.48.6.19 1.14.17 1.56.1.47-.08 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.07-.11-.23-.17-.48-.29z"/>
      </svg>
    </a>
  );
}