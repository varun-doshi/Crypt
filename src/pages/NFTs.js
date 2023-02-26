import React from "react";
import { useState, useEffect } from "react";
import NftCard from "../components/NFT";

const NFTs = ({ user }) => {
  const [nfts, setNfts] = useState([]);
  // const [apiKey, setApiKey] = useState("");
  const apiKey = process.env.REACT_APP_ALCHEMY_API_KEY;
  const fetchNFTs = async () => {
    setNfts([]);
    let nft;
    try {
      var requestOptions = {
        method: "GET",
      };

      const baseURL = `https://polygon-mumbai.g.alchemy.com/v2/${apiKey}`;

      const fetchURL = `${baseURL}/getNFTs/?owner=${user}&contractAddresses%5B%5D=0x10c3F14c6635f8F45EeC0c87F0666B22A359d074`;

      nft = await fetch(fetchURL, requestOptions).then((data) => data.json());
    } catch (error) {
      console.log(error);
    }
    if (nft) {
      setNfts(nft.ownedNfts);
      console.log("Nfts:", nft.ownedNfts);
    }
  };
  useEffect(() => {
    if (user.length > 0) fetchNFTs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="text-center">
      <h1 className="text-5xl mt-12 mb-20 font-poppins">Your NFTs</h1>
      <div className="nfts px-24 flex flex-wrap gap-12">
        {nfts?.map((NFT) => {
          return <NftCard nft={NFT} key={nfts.indexOf(NFT)} />;
        })}
        {nfts.length == 0 && <h2>No Crypt NFTs</h2>}
      </div>
    </div>
  );
};

export default NFTs;
