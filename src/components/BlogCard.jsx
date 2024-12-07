import { Link } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";


// eslint-disable-next-line react/prop-types
const BlogCard = ({ blog, deletable, handleDelete}) => {
  // eslint-disable-next-line react/prop-types
  const { cover_image, title, description, published_at, id,url } = blog;

  // console.log(deletable);

  // const handleDelete = id =>{
  //   deleteBlog(id);
  // }

  return (
    <div>
     
      <div className="relative transition hover:scale-105">

      <div className="absolute  -right-0">
          {deletable && 
          (
          <button onClick={()=> handleDelete(id)}
          className="btn rounded-full bg-red-500 text-yellow-50 hover:bg-lime-500"><MdDeleteForever className="size-6" /></button>

          )}
      </div>
        <Link to={`/blog/${id}`} className="max-w-sm mx-auto group ">
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 dark:bg-gray-500"
            src={cover_image || placeHolderImage}
          />
          <div className="p-6 space-y-2">
            <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {title}
            </a>
            <span className="text-xs dark:text-gray-600">
              {new Date(published_at).toLocaleDateString()}
            </span>
            <p>{description}</p>
          </div>
        </Link>  
      </div>
      <div>
      </div>
    </div>
    
  );
};

export default BlogCard;
