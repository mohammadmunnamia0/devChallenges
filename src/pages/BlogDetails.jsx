import { useState } from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { saveBlog } from "../Utlity/LocalStorage";

const BlogDetails = () => {
  const blogDetails = useLoaderData();
  const [tabIndex, setTabIndex] = useState(0);

  // Add error handling
  if (!blogDetails) {
    return <div className="text-center py-20">Loading blog details...</div>;
  }

  console.log("Blog Details:", blogDetails); // Debug log

  const {
    cover_image,
    published_at,
    reading_time_minutes,
    public_reactions_count,
    tags,
  } = blogDetails;

  //Bookmark handleBookMark

  const handleBookMark = (blogDetails) => {
    // console.log(blogDetails);
    saveBlog(blogDetails);
  };

  return (
    <div className="py-20 bg-gradient-to-b from-base-100 to-base-200 min-h-screen">
      <div className="container mx-auto px-4">
        <article className="relative bg-base-100/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl space-y-8">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-30"></div>

          <div className="space-y-6 relative z-10">
            {/* <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {title}
            </h1> */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={cover_image}
                alt="Blog Cover"
                className="w-full h-60 sm:h-96 object-cover"
              />
            </div>
            {/* dynamic tags names */}
            <div>
              <div className="flex flex-wrap py-4 gap-3 border-t border-dashed border-gray-700 dark:border-gray-600">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 text-sm font-semibold bg-blue-500/20 text-blue-300 rounded-full hover:bg-blue-500/30 transition-colors duration-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400 dark:text-gray-400 border-b border-dashed border-gray-700 pb-6">
              <div className="flex items-center md:space-x-4">
                <p className="text-sm font-semibold">
                  Published: {new Date(published_at).toLocaleDateString()}
                </p>
                <p className="text-sm font-semibold mt-2 md:mt-0">
                  {reading_time_minutes} min read
                </p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0 font-semibold">
                Reactions: {public_reactions_count}
              </p>
            </div>
          </div>
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-800/50 rounded-xl p-2 relative z-10">
            {/* Content Button */}
            <Link
              to=""
              onClick={() => setTabIndex(0)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 transition-all duration-300 ${
                tabIndex === 0
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-700/30"
              } rounded-lg`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content</span>
            </Link>
            {/* Author Button */}
            <Link
              to={"author"}
              onClick={() => setTabIndex(1)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 transition-all duration-300 ${
                tabIndex === 1
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-700/30"
              } rounded-lg ml-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                color="white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Author</span>
            </Link>

            {/* BooksMark Button */}
            <div className="ml-auto pl-4 relative z-10">
              <div
                onClick={() => handleBookMark(blogDetails)}
                className="text-2xl cursor-pointer p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:scale-110 transition-all duration-300"
                title="Bookmark Blog"
              >
                <MdBookmarkAdd />
              </div>
            </div>
          </div>

          <Outlet></Outlet>
        </article>

        {/* dynamic tags names
        <div>
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">

           {
			tags.map(tag => (
				<a
				key={tag}
				className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600
				 dark:text-gray-50">
				#{tag}
			  </a>
			))
		   }
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BlogDetails;
