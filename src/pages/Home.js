import React from "react";
import lab from "../assets/lab.png";
import nft from "../assets/nft.png";
import file from "../assets/file.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import contact from "../assets/contact.jpg";

const Home = () => {
  return (
    <div className="text-center h-[80vh]">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 text-center sm:px-6 lg:px-8 lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-6xl font-medium tracking-tight text-slate-900 sm:text-8xl">
          Welcome to{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <span className="relative">
              CRYPT
              <svg
                aria-hidden="true"
                viewBox="0 0 300 52"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
            </span>
          </span>{" "}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl tracking-tight text-slate-700 text-3xl">
          Your one stop solution for storing your medical history on the safe
          place.
        </p>
      </div>
      {/* why Crypt */}
      <div className=" rounded-[5px] mx-6 p-4 mb-8">
        <p className="text-5xl mt-12 mb-16">
          Why <span className="font-bold text-blue-600">Crypt</span>?
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
      <div className="w-full h-full md:h-4/5 bg-blue-600 text-white rounded-[5px] p-4 ">
        <p className="text-5xl mt-8 mb-14 text-white font-poppins">
          How it Works
        </p>
        <div className="flex justify-around mb-8 flex-col lg:flex-row">
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
    </div>
  );
};

export default Home;
