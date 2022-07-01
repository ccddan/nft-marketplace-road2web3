import { useEffect, useState } from "react";

import NFTTile from "./NFTTile";
import Navbar from "./Navbar";
import { fetchNFTsForCollection } from "../utils";

const metadata = require("./../Marketplace.json");

export default function Marketplace() {
  const [data, updateData] = useState([]);
  const [currAddress, _] = useState(metadata.address);

  useEffect(() => {
    fetchNFTsForCollection(currAddress, updateData);
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col place-items-center mt-20">
        <div className="md:text-xl font-bold text-white">Top NFTs</div>
        <div className="flex mt-5 justify-between flex-wrap max-w-screen-xl text-center">
          {data.map((item, index) => {
            return <NFTTile data={item} key={index}></NFTTile>;
          })}
        </div>
      </div>
    </div>
  );
}
