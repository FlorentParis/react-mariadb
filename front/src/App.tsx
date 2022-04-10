import React, { useEffect, useState } from 'react';
import './App.css';
import Subscription from "./components/Subscription";
import Login from "./components/Login";
import BlogList from './components/BlogList';

/* Beaucoup de choses à revoir, beaucoup de temps perdu à revoir mes fichier php qui etaient vraiment horribles... */
/* Je ferais peut etre un autre push demain (donc le 11/04) pour avancer dans ce TP */

export default function App() {

  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const body = new URLSearchParams({
      type: type,
      email: mail,
      password: password
    });

    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa(`${mail}:${password}`)}`
    })

    fetch('http://localhost:2345', {
      method: 'POST',
      body: body,
      headers: headers,
      mode: 'cors',
      credentials: 'include'
    })
      .then(res => res.json()) 
      .then(data => setToken(data["cookie"]))
  }, [type]);

  function deco() {
    setType("deco");
  }

  return (
    <div className="App">
      {token ? <button onClick={deco}>Déconnexion</button> : '' }
      {!token ? <Subscription setMail={setMail} setPassword={setPassword} setType={setType} /> : '' }
      {!token ? <Login setMail={setMail} setPassword={setPassword} setType={setType}/> : '' }
      {token ? <BlogList mail={mail} pw={password} />  : '' }
    </div>
  );
}