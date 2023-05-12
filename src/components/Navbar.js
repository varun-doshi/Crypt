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
    <div className="md:p-4 p-1 flex gap-4 justify-between items-center overflow-hidden">
      <div className="font-extrabold font-poppins text-xl md:text-5xl text-blue-600 hover:pointer">
        <Link to="/">CRYPT</Link>
      </div>
      <div className="flex justify-between ">
        <p className="md:px-4 rounded-md py-4 md:text-2xl font-poppins hover:bg-[#EFF5F5]">
          <Link to="/">Home</Link>
        </p>
        <p className="md:px-4 rounded-md py-4 md:text-2xl font-poppins hover:bg-[#EFF5F5]">
          <Link to="/admin">Admin</Link>
        </p>
        <p className="md:px-4 rounded-md py-4 md:text-2xl font-poppins hover:bg-[#EFF5F5]">
          <Link to="/nfts">My NFTs</Link>
        </p>
        {user.length > 0 ? (
          <button className="md:px-8 md:text-2xl font-poppins bg-[#EB6440] rounded-lg text-white">
            {user.substring(0, 4) + "..." + user.substring(38)}
          </button>
        ) : (
          <>
            <button
              onClick={handleConnect}
              className="md:px-8 px-2 md:text-2xl font-poppins bg-[#EB6440] z-10"
            >
              Connect
            </button>
            {!user && (
              <span class="animate-ping h-4 w-4 rounded-full bg-blue-600 opacity-85 z-20 -left-4"></span>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
