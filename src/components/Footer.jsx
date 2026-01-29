import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-800/60 bg-gray-950/60">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        

        <div className="mt-6 flex justify-center space-x-6 text-gray-400">
          {/* LinkedIn */}
          <a href="#" className="hover:text-gray-200" aria-label="LinkedIn">
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.036-1.852-3.036-1.853 0-2.136 1.445-2.136 2.939v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.266 2.368 4.266 5.455v6.288zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://instagram.com/saiyedkounain" className="hover:text-gray-200" aria-label="Instagram">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7Zm0 2h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm10 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
            </svg>
          </a>
          
          {/* GitHub */}
          <a href="https://www.github.com/saiyedkounain" className="hover:text-gray-200" aria-label="GitHub">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.12-1.5-1.12-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.09 0-1.13.39-2.05 1.03-2.77-.1-.27-.45-1.36.1-2.84 0 0 .84-.27 2.75 1.06A9.2 9.2 0 0 1 12 6.58c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.06 2.74-1.06.55 1.48.21 2.57.1 2.84.64.72 1.03 1.64 1.03 2.77 0 3.96-2.33 4.83-4.56 5.08.36.31.68.93.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" clipRule="evenodd" />
            </svg>
          </a>
          {/* YouTube */}
          <a href="https://www.youtube.com/@skowdedits/videos" className="hover:text-gray-200" aria-label="YouTube">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.947C18.22 5.5 12 5.5 12 5.5s-6.22 0-7.87.554A2.75 2.75 0 0 0 2.2 8.001 28.7 28.7 0 0 0 1.5 12a28.7 28.7 0 0 0 .7 3.999 2.75 2.75 0 0 0 1.93 1.947C5.78 18.5 12 18.5 12 18.5s6.22 0 7.87-.554a2.75 2.75 0 0 0 1.93-1.947A28.7 28.7 0 0 0 22.5 12a28.7 28.7 0 0 0-.7-3.999ZM10 15.25v-6.5L15 12l-5 3.25Z" />
            </svg>
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Made with love by Saiyed Kounain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
