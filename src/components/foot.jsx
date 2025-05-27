const Foot = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#0a0c10] to-[#1a1d24] text-neutral-content py-16 px-8 md:px-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-20"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and Copyright */}
          <div className="md:col-span-4 flex flex-col items-start space-y-6">
            <div className="flex items-center group">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg transform transition-transform group-hover:scale-105">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white"
                >
                  <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                </svg>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                devChallenges
              </span>
            </div>
            <p className="text-gray-400 text-sm">© 2025 devchallenge.io</p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Challenges Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">
                Challenges
              </h3>
              <div className="space-y-3">
                <a className="block text-gray-400 hover:text-white transition-colors duration-300">
                  All Challenges
                </a>
                <a className="block text-gray-400 hover:text-white transition-colors duration-300">
                  Feedback
                </a>
                <a className="block text-gray-400 hover:text-white transition-colors duration-300">
                  Career Roadmaps
                </a>
                <a className="block text-gray-400 hover:text-white transition-colors duration-300">
                  Community Feed
                </a>
                <a className="block text-gray-400 hover:text-white transition-colors duration-300">
                  Pro Subscription
                </a>
              </div>
            </div>

            {/* Career Paths Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">
                Career Paths
              </h3>
              <div className="space-y-3">
                <a className="block text-gray-400 hover:text-white transition-colors duration-300">
                  Web Developer Roadmap
                </a>
                <a className="block text-gray-400 hover:text-white transition-colors duration-300">
                  Front-end Developer
                </a>
                <a className="block text-gray-400 hover:text-white transition-colors duration-300">
                  Full-stack Developer
                </a>
              </div>
            </div>

            {/* Projects Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">
                Projects
              </h3>
              <div className="space-y-3">
                <a className="block text-gray-400 hover:text-white transition-colors duration-300">
                  HTML & CSS Projects
                </a>
                <a className="block text-gray-400 hover:text-white transition-colors duration-300">
                  JavaScript Projects
                </a>
                <a className="block text-gray-400 hover:text-white transition-colors duration-300">
                  Front-end Projects
                </a>
                <a className="block text-gray-400 hover:text-white transition-colors duration-300">
                  Full-stack Projects
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="md:col-span-2 flex flex-col items-start space-y-6">
            <h3 className="text-lg font-semibold text-white">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="fill-white"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </div>
              </a>
              <a
                href="#"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="fill-white"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </div>
              </a>
              <a
                href="#"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="fill-white"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg>
                </div>
              </a>
              <a
                href="#"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="fill-white"
                  >
                    <path d="M9 8h-3v4c0 5.423 3.645 6.791 0 12-1.283-1.662-2.582-3.131-3-4 2.403 1.07 4.558 1.413 6 1.413v-5h3v-4h-3z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
