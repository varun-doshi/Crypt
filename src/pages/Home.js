import React from "react";
import memory from "../assets/Memory.png";
import lab from "../assets/lab.png";
import nft from "../assets/nft.png";
import file from "../assets/file.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import contact from "../assets/contact.jpg";

const Home = () => {
  return (
    <div className="text-center bg-[#EFF5F5] h-screen">
      <div className="flex justify-around items-center">
        <div className="hero-text text-6xl">
          Welcome <br />
          to <br />{" "}
          <span className="font-bold text-[#0081C9] font-poppins">Crypt</span>
        </div>
        <div className="hero-img w-[50%]">
          <img src={memory} alt="" />
        </div>
      </div>
      {/* why Crypt */}
      <div className=" rounded-[5px] mx-6 p-4 mb-8">
        <p className="text-5xl mt-12 mb-16">
          Why <span className="font-bold text-[#0081C9]">Crypt</span>?
        </p>
        <p className="font-ubuntu font-normal text-2xl w-[80%] mx-auto">
          Crypt leverages the power of Blockchain to securely store your Medical
          History. Crypt will mint a Soulbound Token to your address which
          cannot be transferred to any other account. These SBTs are minted on
          the Polygon Chain. Filecoin and IPFS provide Permanent Decentralized
          Storage for reliable use.
        </p>
      </div>

      {/* explanation */}
      <div className=" bg-[#3A98B9] text-white rounded-[5px] mx-6 p-4 ">
        <p className="text-5xl mt-8 mb-14 text-white font-poppins">
          How it Works
        </p>
        <div className="flex justify-around mb-8">
          <div className="px-14">
            <img
              className="drop-shadow-lg w-[150px] mx-auto mb-8"
              src={lab}
              alt=""
            />
            <p className="text-3xl mb-6 font-bold">Medical Tests</p>
            <p>
              Visit your nearest medical center and get your medical
              examinations completed.
            </p>
          </div>
          <div className="px-14">
            <img
              className="drop-shadow-lg w-[150px] mx-auto mb-8 "
              src={nft}
              alt=""
            />
            <p className="text-3xl mb-6 font-bold">NFTs minted</p>
            <p>
              After tests are conducted, your results will be compiled and an
              NFT will be minted to your address.
            </p>
          </div>
          <div className="px-14">
            <img
              className="drop-shadow-lg w-[150px] mx-auto mb-8"
              src={file}
              alt=""
            />
            <p className="text-3xl mb-6 font-bold">View NFTs</p>
            <p>
              Once NFTs are minted, you can view your test results on the 'My
              NFTs' section.
            </p>
          </div>
        </div>
      </div>

      {/* Try it out */}
      <div>
        <p className="text-5xl font-bold my-16">
          How to try <span className="text-[#0081C9]">Crypt</span>?
        </p>
        <div className="flex ">
          <div className="min-w-[50%]">
            <div className="flex my-8 items-center justify-start ml-8">
              <img className="w-[80px]" src={one} alt="number-one" />
              <p className="text-2xl ml-4">Send your address</p>
            </div>
            <form
              action="https://getform.io/f/0e6b6217-185e-42dc-ad70-223af268a6f5"
              method="POST"
              className="ml-0"
            >
              <label
                htmlFor="add"
                className="font-bold text-2xl mr-2 font-ubuntu"
              >
                Your Address
              </label>
              <input
                className="border-2 border-black rounded-sm text-xl"
                type="text"
                id="add"
                name="address"
                placeholder="0x0000..."
              />
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 p-2 my-8 ml-4 text-2xl rounded-md hover:scale-105 duration-200">
                Request SBT
              </button>
            </form>
            <div className="flex my-8 items-center justify-start ml-8">
              <img className="w-[80px]" src={two} alt="" />
              <p className="text-2xl ml-4">
                A Crypt Soulbound NFT will be minted to your address
              </p>
            </div>
            <div className="flex my-8 items-center justify-start ml-8">
              <img className="w-[80px]" src={three} alt="" />
              <p className="text-2xl ml-4">
                Connect your wallet and view it from your My NFTs section!
              </p>
            </div>
          </div>
          <div>
            <img className="" src={contact} alt="" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#EFF5F5] py-4">
        <p className="text-xl">
          Made by{" "}
          <a
            className="font-bold "
            href="https://www.linkedin.com/in/varun-doshi-aaba38184/"
          >
            Varun Doshi
          </a>{" "}
          @Ureckon'23
        </p>
      </div>
    </div>
  );
};

export default Home;
