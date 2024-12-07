import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Utlity/LocalStorage";
import BlogCard from "../components/blogCard";
import EmptyState from "../components/EmptyState";

const Bookmark = () => {
  const [blogsData, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };

  if (blogsData.length < 1)
    return (
     <EmptyState></EmptyState>
    );

  return (
    <div className="grid mt-8 px-10 sm:px-8 lg:px-12 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogsData.map((blog) => (
        <BlogCard
          handleDelete={handleDelete}
          deletable={true}
          blog={blog}
          key={blog.id}
        ></BlogCard>
        //using the deletable for conditions rendering check the blogs BlogCard,jsx
      ))}
    </div>
  );
};

export default Bookmark;
