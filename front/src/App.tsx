import React, { useEffect } from 'react';
import './App.css';

export default function App() {

  useEffect(() => {
    const body = new URLSearchParams({
      username: 'Florent',
      password: 'password'
    });

    /* 02:12:24 */

    fetch('http://localhost:2345', {
      method: 'POST',
      body: body
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