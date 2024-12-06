import { useLoaderData } from "react-router-dom";
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// need this only when a huge html file need to convert in to md file for using in js , in output check the content then u will understand it
// import Markdown from 'react-markdown';
// import rehypeRaw from 'rehype-raw';
{/* <p>
<Markdown rehypePlugins={[rehypeRaw]}>{blog.body_html}</Markdown> 
</p> */}

const Content = () => {
  const blog = useLoaderData();
  return (
    <div>
      <div className=" mx-auto group ">
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold">{blog.title}</h3>
          <span className="text-xs dark:text-gray-600">
            {new Date(blog.published_at).toLocaleDateString()}
          </span>
          <p>
          <Markdown rehypePlugins={[rehypeRaw]}>{blog.body_html}</Markdown>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
