import React, { useEffect } from "react";
import * as ethers from "ethers";
import { useState } from "react";
import { NFTStorage, File } from "nft.storage";
import abi from "../constants/abi.json";
import camera from "../assets/camera.png";

const Admin = ({ user }) => {
  const reader = new FileReader();
  const NFT_STORAGE_API_KEY = process.env.REACT_APP_NFTsTORAGE_KEY;

  const contractAddress = "0x10c3F14c6635f8F45EeC0c87F0666B22A359d074";

  const [img, setImg] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrls, setImgUrls] = useState();
  const [recipient, setRecipient] = useState("");
  const [loading, setLoading] = useState("Create");
  const provider = new ethers.BrowserProvider(window.ethereum);

  const handleImage = (e) => {
    const data = e.target.files[0];

    setImg(e.target.files[0]);
    reader.onload = (e) => {
      const { result } = e.target;
      setImgUrls(result);
    };
    reader.readAsDataURL(data);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddress = (e) => {
    setRecipient(e.target.value);
  };
  const isOwner = () => {
    if (user == "0x83f5ebac3c2806ef448946c19a371076b6a6d0ca") return true;
    else return false;
  };

  async function storeExampleNFT() {
    if (isOwner() && name.length > 0 && description.length > 0) {
      try {
        const imageFile = new File([img], "nft.png", { type: "image/png" });
        console.log(imageFile);

        if (!imageFile) return;
        const nft = {
          name: name,
          image: imageFile,
          description: description,
        };

        setLoading("Loading...");
        const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });
        const metadata = await client.store(nft);

        console.log("NFT data stored!");
        console.log("Metadata URI: ", metadata.url);
        mint(metadata.url);
      } catch (error) {
        console.log(error);
      }
    } else {
      window.alert("You are not owner");
    }
  }
  const mint = async (metadata) => {
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    const tx = await contract.safeMint(recipient, metadata);
    await tx.wait();
    setLoading("Create");
    console.log("Transaction complete");
  };

  return (
    <div className="text-center text-black bg-[#fcf5f5] font-poppins">
      <h1 className="text-5xl my-12">Create New Record</h1>
      <div className="input-box flex flex-col justify-center items-center">
        <input
          className="name my-6 border-gray-900 border rounded-[2px] p-1 text-lg "
          type="text"
          onChange={handleName}
          placeholder="Name"
        />
        <input
          className="desc my-6 border-gray-900 border rounded-[2px] p-1 text-lg"
          type="text"
          onChange={handleDescription}
          placeholder="Description of file"
        />

        <label htmlFor="image-upload">
          <img
            src={camera}
            className="mb-4 p-4 w-[180px] cursor-pointer border-2 border-gray-500 border-dashed"
            alt=""
          />
        </label>
        <div className="preview">
          <img className="previewImage" src={imgUrls} alt="" />
        </div>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="my-6"
        />
        <input
          type="text"
          placeholder="Address of Reciever: 0x..."
          onChange={handleAddress}
          className="w-[400px] my-6 text border-gray-900 border rounded-[2px] p-1 text-lg"
        />
        <button
          className="mintbtn mb-6 bg-[#E96479] p-4 rounded-md text-3xl"
          onClick={storeExampleNFT}
        >
          {loading}
        </button>

        {/* <button onClick={mint}>mint</button> */}
      </div>
    </div>
  );
};

export default Admin;
