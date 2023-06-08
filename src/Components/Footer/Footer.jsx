

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">
          © 2023 Your Company. All rights reserved.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 2v20L12 15l-9 7V2h19zm-9 2.75v5.5L20.75 12 13 9.25V4.75l-.07-.03L13 4.72zM4 2h16v20H4z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 6.75A10.49 10.49 0 0 1 12 17h-.18a2.05 2.05 0 0 1-1.74-1 2.11 2.11 0 0 1-.08-1.76A7.92 7.92 0 0 1 12 14a8 8 0 0 1 5.74 2.45A2.07 2.07 0 0 1 19.09 17H20a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zM22 2v1"></path>
              <rect width="4" height="12" x="2" y="6" rx="2"></rect>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3.37"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M8 14s1.5 1 4 1 4-1 4-1"></path>
              <path d="M9 9s.5 1 3 1 3-1 3-1"></path>
              <path d="M6 21V9a9 9 0 0 1 18 0v12"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
