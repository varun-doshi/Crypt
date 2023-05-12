import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ContractContext from "../context/ContractContext";

const Navbar = () => {
  const { user, handleConnect, handleAccChange } = useContext(ContractContext);

  useEffect(() => {
    window.ethereum.on("accountsChanged", handleAccChange);

    return () => {
      window.ethereum.removeListener("accountsChanged", handleAccChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-4 flex justify-between items-center">
      <div className="font-extrabold font-poppins text-5xl text-blue-600 hover:pointer">
        <Link to="/">CRYPT</Link>
      </div>
      <div className="flex justify-between ">
        <p className="px-4 rounded-md py-4 text-2xl font-poppins hover:bg-[#EFF5F5]">
          <Link to="/admin">Admin</Link>
        </p>
        <p className="px-4 rounded-md py-4 text-2xl font-poppins hover:bg-[#EFF5F5]">
          <Link to="/">Home</Link>
        </p>
        <p className="px-4 rounded-md py-4 text-2xl font-poppins hover:bg-[#EFF5F5]">
          <Link to="/nfts">My NFTs</Link>
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
  );
};

export default Navbar;
