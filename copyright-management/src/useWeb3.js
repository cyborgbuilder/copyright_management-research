import { useEffect, useState } from 'react';
import Web3 from 'web3';

const useWeb3 = () => {
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    const initWeb3 = () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
      } else {
        alert('Ethereum wallet not detected. Please install MetaMask.');
      }
    };

    initWeb3();
  }, []);

  return web3;
};

export default useWeb3;
