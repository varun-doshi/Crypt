import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between">
      <div>CRYPT</div>
      <div className="flex justify-between ">
        <p className="px-8 text-xl">
          <Link to="/">Home</Link>
        </p>
        <p className="px-8 text-xl">
          <Link to="/nfts">My NFTs</Link>
        </p>
        <button className="px-8 text-xl">Connect</button>
      </div>
    </div>
  );
};

export default Navbar;
