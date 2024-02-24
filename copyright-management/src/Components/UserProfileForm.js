import React, { useState } from 'react';
import axios from 'axios'; // Import axios for HTTP requests to your backend
import useSmartContract from '../useSmartContract';

const UserProfileForm = () => {
  const contract = useSmartContract();
  const [did, setDid] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState(''); // Added for password
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [homeAddress, setHomeAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contract) return;

    // First, send username and password to the backend
    try {
      // Replace 'http://localhost:5000/register' with your actual backend endpoint
      await axios.post('http://localhost:5000/register', { did, userName, password });
      alert('User registered successfully!');
    } catch (error) {
      alert(`Failed to register user: ${error.response.data.message}`);
      return; // Stop execution if registration fails
    }

    // Then, interact with the blockchain to store public information
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      await contract.methods.setUserProfile(did, fullName, age, homeAddress).send({ from: account });
      alert('Blockchain profile updated successfully!');
    } catch (error) {
      alert(`Failed to update blockchain profile: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={did} onChange={(e) => setDid(e.target.value)} placeholder="Decentralized ID" required />
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" required />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
      <input type="text" value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)} placeholder="Home Address" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserProfileForm;
