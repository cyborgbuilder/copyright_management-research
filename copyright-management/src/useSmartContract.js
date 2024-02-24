import { useEffect, useState } from 'react';
import contractABI from './Utils/contractABI.json';
import useWeb3 from './useWeb3';

const contractAddress = '0x4791F72882B0624bCcaB8F656E995Ab18a3396F2';

const useSmartContract = () => {
  const web3 = useWeb3();
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (web3) {
      const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
      setContract(contractInstance);
    }
  }, [web3]);

  return contract;
};

export default useSmartContract;
