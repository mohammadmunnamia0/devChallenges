import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import rehypeRaw from "rehype-raw";

// need this only when a huge html file need to convert in to md file for using in js , in output check the content then u will understand it
// import Markdown from 'react-markdown';
// import rehypeRaw from 'rehype-raw';
{
  /* <p>
<Markdown rehypePlugins={[rehypeRaw]}>{blog.body_html}</Markdown> 
</p> */
}

const Content = () => {
  const blog = useLoaderData();
  return (
    <div>
      <div className="mx-auto group p-4 sm:p-6 lg:p-8 overflow-x-auto">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">{blog.title}</h3>
          <span className="text-xs dark:text-gray-600">
            {new Date(blog.published_at).toLocaleDateString()}
          </span>
          <div className="prose dark:prose-invert max-w-none">
            <Markdown rehypePlugins={[rehypeRaw]}>{blog.body_html}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
