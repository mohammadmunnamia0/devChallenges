import { useLoaderData } from "react-router-dom";

const Author = () => {
    const blog = useLoaderData();
    return (
        <div>
            <h1>{blog.user.name}</h1>
        </div>
    );
};

export default Author;