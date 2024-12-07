import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { saveBlog } from "../Utlity/LocalStorage";

const BlogDetails = () => {
  const blogDetails = useLoaderData();
  const [tabIndex, setTabIndex] = useState(0);

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
    <div>
      <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
          <div className="space-y-6">
            {/* <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {title}
            </h1> */}
            <div>
              <img
                src={cover_image}
                alt=""
                className="w-full h-60 sm:h-96 dark:bg-gray-500"
              />
            </div>
            {/* dynamic tags names */}
            <div>
              <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                {tags.map((tag) => (
                  <a
                    key={tag}
                    className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600
				 dark:text-gray-50"
                  >
                    #{tag}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
              <div className="flex items-center md:space-x-2">
                <p className="text-sm">
                  {new Date(published_at).toLocaleDateString()}
                </p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                {reading_time_minutes} min read • {public_reactions_count} views
              </p>
            </div>
          </div>
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
            <Link
              to=""
              onClick={() => setTabIndex(1)}
              className={`flex items-center  flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0 ? "border border-b-0" : "border-b"
              } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content</span>
            </Link>
            <Link
              to={"author"}
              onClick={() => setTabIndex(0)}
              className={`flex items-center  flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1 ? "border border-b-0" : "border-b"
              } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Author</span>
            </Link>

            {/* BooksMark Button */}
            <div>
              <div
                onClick={() => handleBookMark(blogDetails)}
                className="text-2xl cursor-pointer p-2 rounded-full bg-slate-300 hover:bg-lime-200 hover:scale-105"
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
