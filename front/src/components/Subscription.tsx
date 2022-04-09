import { useState } from "react";

/* Ajouter Interface TS */

export default function Subscription(props: {setMail: any, setPassword: any, setType: any}) {

    const [mail, setMail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleChangeMail = (e: any) => setMail(e.target.value);

    const handleChangePW = (e: any) => setPassword(e.target.value);

    const submitLogin = (e: any) => {
        e.preventDefault();
        props.setType("subscription");
        props.setMail(mail);
        props.setPassword(password);
        setMail('');
        setPassword('');
    }

    return (
        <form onSubmit={submitLogin}>
            <h2>S'inscrire</h2>
            <label>E-Mail</label>
            <input type="email" onChange={handleChangeMail} value={mail}/>
            <label>Password</label>
            <input type="password" onChange={handleChangePW} value={password}/>
            <button type="submit">S'inscrire</button>
        </form>
    )
}