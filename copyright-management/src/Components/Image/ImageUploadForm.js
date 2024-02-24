import React, { useState } from 'react';
import useSmartContract from '../../useSmartContract';

const ImageUploadForm = () => {
  const contract = useSmartContract();
  const [imageHash, setImageHash] = useState('');
  const [metadata, setMetadata] = useState('');
  const [ownerDid, setOwnerDid] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contract) return;

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      await contract.methods.registerImage(imageHash, metadata, ownerDid).send({ from: account });
      alert('Image registered successfully!');
    } catch (error) {
      alert(`Failed to register image: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={imageHash}
        onChange={(e) => setImageHash(e.target.value)}
        placeholder="Image IPFS Hash"
        required
      />
      <input
        type="text"
        value={metadata}
        onChange={(e) => setMetadata(e.target.value)}
        placeholder="Image Metadata"
        required
      />
      <input
        type="text"
        value={ownerDid}
        onChange={(e) => setOwnerDid(e.target.value)}
        placeholder="Owner DID"
        required
      />
      <button type="submit">Register Image</button>
    </form>
  );
};

export default ImageUploadForm;
