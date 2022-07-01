import { useEffect, useState } from "react";

import MarketplaceJSON from "../Marketplace.json";
import NFTTile from "./NFTTile";
import Navbar from "./Navbar";
import { fetchBoughtNFTs } from "./../utils";
import { useParams } from "react-router-dom";

const ethers = require("ethers");

export default function Profile() {
  const [data, updateData] = useState([]);
  const [dataFetched, updateFetched] = useState(false);
  const [address, updateAddress] = useState("");
  const [totalPrice, updateTotalPrice] = useState("0");

  async function getUserAddress() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    updateAddress(await signer.getAddress());
    updateFetched(true);
  }

  const params = useParams();
  const tokenId = params.tokenId;

  useEffect(() => {
    if (!address) {
      getUserAddress();
    }
    if (address) fetchBoughtNFTs(address, updateData);
    if (data.length) {
      let sumPrice = 0;
      for (let item of data) {
        sumPrice += Number(item.metadata.price);
      }
      updateTotalPrice(sumPrice.toPrecision(3));
    }
  }, [address, data.length]);

  return (
    <div className="profileClass" style={{ minHeight: "100vh" }}>
      <Navbar></Navbar>
      <div className="profileClass">
        <div className="flex text-center flex-col mt-11 md:text-2xl text-white">
          <div className="mb-5">
            <h2 className="font-bold">Wallet Address</h2>
            {address}
          </div>
        </div>
        <div className="flex flex-row text-center justify-center mt-10 md:text-2xl text-white">
          <div>
            <h2 className="font-bold">No. of NFTs</h2>
            {data.length}
          </div>
          <div className="ml-20">
            <h2 className="font-bold">Total Value</h2>
            {totalPrice} ETH
          </div>
        </div>
        <div className="flex flex-col text-center items-center mt-11 text-white">
          <h2 className="font-bold">Your NFTs</h2>
          <div className="flex justify-center flex-wrap max-w-screen-xl">
            {data.map((value, index) => {
              return <NFTTile data={value} key={index}></NFTTile>;
            })}
          </div>
          <div className="mt-10 text-xl">
            {data.length == 0
              ? "Oops, No NFT data to display (Are you logged in?)"
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
