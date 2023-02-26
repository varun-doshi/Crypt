import React from "react";

const NftCard = ({ nft }) => {
  return (
    <div className="nft flex flex-col w-[25%] mb-24 bg-[#EFF5F5] font-ubuntu shadow-lg">
      <div className="mx-auto">
        <img className="" src={nft.media[0].gateway} alt="" />
      </div>
      <div className="nft-details w-[100%]">
        <div className="title">
          <h2 className="italic">Name:</h2>
          <h2 className="nft-title text-xl">{nft.title}</h2>
        </div>
        <div className="nft-info flex justify-between px-1">
          <div>
            <p className="italic">Address:</p>
            <p className="text-xl">
              {`${nft.contract.address.substr(
                0,
                6
              )}...${nft.contract.address.substr(
                nft.contract.address.length - 4
              )}`}
            </p>
          </div>
          <div className="nft-time">
            <p>Uploaded:</p>
            <p className="text-xl">{nft.timeLastUpdated.substring(0, 10)}</p>
          </div>
        </div>

        <div className="my-4">
          <a
            className="bg-blue-500 text-2xl p-2 rounded-sm text-white"
            target={"blank"}
            href={`https://etherscan.io/address/${nft.contract.address}`}
          >
            View on Etherscan
          </a>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
