import { useState, useEffect } from "react";
import Blog from "./Blog";
import BlogForm from "./BlogForm";

export default function BlogList(props: {blogs: any, setBlogs: any, mail: any, pw: any}) {

    const addBlog = (blog: Object) => {
      const newBlog = [blog, ...props.blogs];
      props.setBlogs(newBlog);
    }

    return (
        <div className="blog-list">
            <BlogForm addBlog={addBlog} />
            <Blog blogs={props.blogs} />
        </div>
    )
}