export default function Blog(props: {blogs: any}) {

    console.log(props.blogs);

    return props.blogs.map((blog: {
        title: string,
        content: string
    }, index: any) => (
        <div key={index}>
            <h1>{blog.title}</h1>
            <div>Par : Auteur</div>
            <div>Le : Date</div>
            <p>{blog.content}</p>
        </div>
    ))
}