import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[calc(100vh-120px)]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="font-extrabold text-6xl">
              Welcome To <span className="text-red-600">devChallenges</span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div>
              <NavLink
                to="/blog"
                href="#_"
                className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
              >
                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                  <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                </span>
                <span className="relative text-white font-bold">Read Blog</span>
              </NavLink>
              <NavLink
                to="/bookmarks"
                href="#_"
                className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border  rounded-lg shadow-inner group border-red-500 ml-3"
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease "></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease "></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease "></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100 "></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease font-bold ">
                  Bookmarks
                  
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <img src="../assets/wave.svg" alt="" />
    </div>
  );
};

export default Home;
