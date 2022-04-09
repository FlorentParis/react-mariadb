import React, { useEffect, useState } from 'react';
import './App.css';
import Subscription from "./components/Subscription";
import Login from "./components/Login";

export default function App() {

  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [type, setType] = useState<string>('');

  useEffect(() => {
    const body = new URLSearchParams({
      type: type
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
      .then(res =>res.json()) 
      .then(data => console.log(data))
  }, [mail]);

  return (
    <div className="App">
      <span>{mail}</span>
      <span>{password}</span>
      <Subscription setMail={setMail} setPassword={setPassword} setType={setType} />
      <Login setMail={setMail} setPassword={setPassword} setType={setType}/>
    </div>
  );
}