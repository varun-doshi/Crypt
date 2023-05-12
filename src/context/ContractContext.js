import { createContext, useState } from "react";
import * as ethers from "ethers";

const ContractContext = createContext();

export const ContractProvider = ({ children }) => {
  const [user, setUser] = useState("");
  // const [owner, setOwner] = useState(false);

  const handleConnect = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setUser(accounts[0]);
      console.log(accounts[0]);
    }
  };
  const handleAccChange = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    setUser(accounts[0]);
  };

  return (
    <ContractContext.Provider
      value={{ user, setUser, handleConnect, handleAccChange }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export default ContractContext;
