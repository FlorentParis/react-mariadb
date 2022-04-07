import React, { useEffect } from 'react';
import './App.css';

export default function App() {

  useEffect(() => {
    const body = new URLSearchParams({
      username: 'Florent',
      password: 'password'
    });

    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa('Francis:password')}`
    })

    fetch('http://localhost:2345', {
      method: 'POST',
      body: body,
      headers: headers,
      mode: 'cors',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }, []);

  return (
    <div className="App">
      <span>Test</span>
    </div>
  );
}