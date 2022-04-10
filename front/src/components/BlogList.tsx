import Blog from "./Blog";
import BlogForm from "./BlogForm";

export default function BlogList() {
    return (
        <div className="blog-list">
            <BlogForm/>
            <Blog/>
        </div>
    )
}