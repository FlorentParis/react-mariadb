import { useState } from "react";

export default function Login(props: {setMail: any, setPassword: any, setType: any}) {

    const [mail, setMail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleChangeMail = (e: any) => setMail(e.target.value);

    const handleChangePW = (e: any) => setPassword(e.target.value);

    const submitLogin = (e: any) => {
        e.preventDefault();
        props.setType("login");
        props.setMail(mail);
        props.setPassword(password);
        setMail('');
        setPassword('');
    }

    return (
        <form onSubmit={submitLogin}>
            <h2>Se connecter</h2>
            <label>E-Mail</label>
            <input type="email" onChange={handleChangeMail}/>
            <label>Password</label>
            <input type="password" onChange={handleChangePW}/>
            <button type="submit">Se connecter</button>
        </form>
    )
}