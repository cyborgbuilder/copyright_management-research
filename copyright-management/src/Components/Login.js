import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLoginSuccess }) => {
  const [did, setDid] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/login', { did, password });
      onLoginSuccess(data); // Store the token in local storage or context
      console.log('Login successful', data.username);
    } catch (error) {
      console.error('Login failed', error.response.data.message);
    }
  };

  return (
    <div>
      <input type="text" placeholder="DID" value={did} onChange={(e) => setDid(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
