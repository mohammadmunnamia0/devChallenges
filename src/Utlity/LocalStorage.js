


import toast from 'react-hot-toast';


export const getBlogs = () =>{
    let blogs = [];
    const storedData = localStorage.getItem('blogs');
    if(storedData){
        blogs = JSON.parse(storedData);
    }
    return blogs;
}

//save
export const saveBlog = blog =>{
    let blogs = getBlogs();
    const isExist = blogs.find(d => d.id === blog.id)
    if(isExist)
        {
            return toast.error('Already Bookmarked')
        } 
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    toast.success('Blog Bookmarked Successfully');
}

//delete

export const deleteBlog = id =>{
    let blogs = getBlogs();
    const remaining = blogs.filter(d=> d.id !==id);
    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success('Blog Removed From Bookmarked Successfully');

}