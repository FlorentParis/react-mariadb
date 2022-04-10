import { useState, useEffect } from "react";
import Blog from "./Blog";
import BlogForm from "./BlogForm";

export default function BlogList(props: {mail: any, pw: any}) {

    const [blogs, setblogs] = useState<Array<Object>>([{}]);

    useEffect(() => {
        const body = new URLSearchParams({
          test: 'test'
        });
    
        const headers = new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${btoa(`${props.mail}:${props.pw}`)}`
        })
    
        fetch('http://localhost:2345', {
          method: 'POST',
          body: body,
          headers: headers,
          mode: 'cors',
          credentials: 'include'
        })
          .then(res => res.json())
      }, [blogs]);

    return (
        <div className="blog-list">
            <BlogForm/>
            <Blog blogs={blogs}/>
        </div>
    )
}