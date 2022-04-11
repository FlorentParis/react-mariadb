import { useState } from "react"

export default function BlogForm(props: {addBlog: Function}) {

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const handleChangeTitle = (e: any) => {
        setTitle(e.target.value);
    }

    const handleChangeContent = (e: any) => {
        setContent(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        props.addBlog({
            title: title,
            content: content
        })

        setTitle('');
        setContent('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Ecrire un Post.</h1>
            <input type="text" placeholder="Titre" onChange={handleChangeTitle} value={title}/>
            <textarea placeholder="Contenue" onChange={handleChangeContent} value={content}></textarea>
            <button type="submit">Envoie</button>
        </form>
    )
}