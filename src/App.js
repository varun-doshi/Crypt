import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import { ethers } from "ethers";
import Home from "./pages/Home";
import NFTs from "./pages/NFTs";
import { useState, useEffect } from "react";
import Admin from "./pages/Admin";

function App() {
  const [user, setUser] = useState("");
  const [owner, setOwner] = useState(false);

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
    // console.log(user);
    const accounts = await provider.send("eth_requestAccounts", []);
    setUser(accounts[0]);
  };
  useEffect(() => {
    window.ethereum.on("accountsChanged", handleAccChange);

    return () => {
      window.ethereum.removeListener("accountsChanged", handleAccChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="p-4 flex justify-between items-center">
        <div className="font-extrabold font-poppins text-5xl text-[#0081C9] ">
          CRYPT
        </div>
        <div className="flex justify-between ">
          <p className="px-4 rounded-md py-4 text-2xl font-poppins hover:bg-[#EFF5F5]">
            <Link to="/Crypt/admin">Admin</Link>
          </p>
          <p className="px-4 rounded-md py-4 text-2xl font-poppins hover:bg-[#EFF5F5]">
            <Link to="/Crypt/">Home</Link>
          </p>
          <p className="px-4 rounded-md py-4 text-2xl font-poppins hover:bg-[#EFF5F5]">
            <Link to="/Crypt/nfts">My NFTs</Link>
          </p>
          {user.length > 0 ? (
            <button className="px-8 text-2xl font-poppins bg-[#EB6440] rounded-lg text-white">
              {user.substring(0, 4) + "..." + user.substring(38)}
            </button>
          ) : (
            <button
              onClick={handleConnect}
              className="px-8 text-2xl font-poppins bg-[#EB6440]"
            >
              Connect
            </button>
          )}
        </div>
      </div>

      <Routes>
        <Route path="Crypt/" element={<Home />} />
        <Route path="/Crypt/nfts" element={<NFTs user={user} />} />
        <Route path="/Crypt/admin" element={<Admin user={user} />} />
      </Routes>
    </>
  );
}

export default App;
