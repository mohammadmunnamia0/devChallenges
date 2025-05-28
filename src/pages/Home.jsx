import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { NavLink } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  // Fetch latest blog posts
  const { data: latestPosts, isLoading: isLoadingLatest } = useQuery({
    queryKey: ["latestPosts"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://dev.to/api/articles?per_page=3"
      );
      return data;
    },
  });

  // Fetch popular blog posts (sorted by likes)
  const { data: popularPosts, isLoading: isLoadingPopular } = useQuery({
    queryKey: ["popularPosts"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://dev.to/api/articles?per_page=3&top=7"
      );
      return data;
    },
  });

  // Define skills data
  const skills = [
    {
      name: "HTML5",
      description:
        "Every piece of content on a web page is wrapped in HTML elements",
      icon: (
        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          5
        </div>
      ),
    },
    {
      name: "CSS3",
      description: "CSS describes how HTML elements should be displayed",
      icon: (
        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          3
        </div>
      ),
    },
    {
      name: "Tailwind",
      description: "A utility-first CSS framework for fast UI development",
      icon: (
        <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0015.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            ></path>
          </svg>
        </div>
      ),
    },
    {
      name: "JavaScript",
      description: "JavaScript is the programming language of the Web",
      icon: (
        <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-black font-bold text-xl">
          JS
        </div>
      ),
    },
    {
      name: "Git",
      description:
        "Git is a distributed version-control system for tracking changes in source code",
      icon: (
        <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero min-h-[calc(100vh-120px)]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="font-extrabold text-5xl lg:text-6xl">
              Welcome To <span className="text-red-600">devChallenges</span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div>
              <NavLink
                to="/blog" // Link to the main blog page
                href="#_"
                className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
              >
                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                  <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                </span>
                <span className="relative text-white font-bold">
                  Read Our Blog
                </span>
              </NavLink>
              <NavLink
                to="/bookmarks"
                href="#_"
                className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border rounded-lg shadow-inner group border-red-500 ml-3"
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

      {/* Latest Blog Posts Section */}
      <section className="py-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Latest Blog Posts
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay up to date with our most recent articles and insights
            </p>
          </div>

          {isLoadingLatest ? (
            <div className="flex justify-center">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts?.map((post) => (
                <div
                  key={post.id}
                  className="group relative bg-base-100/50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-sm font-semibold bg-blue-500/10 text-blue-500 rounded-full">
                        {post.tag_list[0] || "General"}
                      </span>
                      <span className="text-sm text-gray-500">
                        {post.public_reactions_count} ❤️
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(post.published_at).toLocaleDateString()}
                      </span>
                      <NavLink
                        to={`/blog/${post.id}`}
                        className="text-primary hover:text-primary-focus transition-colors duration-300"
                      >
                        Read More →
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Popular Blog Posts Section */}
      <section className="py-20 bg-gradient-to-b from-base-200 to-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Popular Blog Posts
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our most loved and shared articles
            </p>
          </div>

          {isLoadingPopular ? (
            <div className="flex justify-center">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularPosts?.map((post) => (
                <div
                  key={post.id}
                  className="group relative bg-base-100/50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-sm font-semibold bg-purple-500/10 text-purple-500 rounded-full">
                        {post.tag_list[0] || "General"}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">
                          {post.public_reactions_count} ❤️
                        </span>
                        <span className="text-sm text-gray-500">
                          {post.comments_count} 💬
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(post.published_at).toLocaleDateString()}
                      </span>
                      <NavLink
                        to={`/blog/${post.id}`}
                        className="text-primary hover:text-primary-focus transition-colors duration-300"
                      >
                        Read More →
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Suggested Skills Section */}
      <section className="py-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              To Practice: Suggested Skills
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Enhance your development skills with these key technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-base-100/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-start space-x-4">
                  <div className="flex-shrink-0">{skill.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <img src="../assets/wave.svg" alt="" />
    </div>
  );
};

export default Home;
