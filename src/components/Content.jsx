import { useLoaderData } from "react-router-dom";

const Content = () => {

    const blog = useLoaderData();
  return (
    <div>
      <article className="max-w-2xl px-6 py-24 mx-auto space-y-16 dark:bg-gray-100 dark:text-gray-900">
        <div className="w-full mx-auto space-y-4">
          <h1 className="text-5xl font-bold leading-none">
           {blog.title}
          </h1>
        
          <p className="text-sm dark:text-gray-600">
            by
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline dark:text-violet-600"
            >
              <span>Leroy Jenkins</span>
            </a>
            on
            <time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
          </p>
        </div>
        <div className="dark:text-gray-800">
          <p>Insert the actual text content here...</p>
        </div>
      </article>
    </div>
  );
};

export default Content;
