import config from "./config";

export const fetchBoughtNFTs = async (address, setFn) => {
  let endpoint = "getNFTs/";
  console.log("fetching nfts for wallet:", endpoint);
  const baseURL = `${config.rpcUrl}/${endpoint}`;
  var requestOptions = {
    method: "GET",
  };

  const fetchURL = `${baseURL}?owner=${address}`;
  const nfts = await fetch(fetchURL, requestOptions).then((data) =>
    data.json()
  );

  if (nfts && nfts.ownedNfts.length) {
    console.log("nfts:", nfts);
    setFn(nfts.ownedNfts);
  } else {
    alert("You do not own any NFT");
  }
};

export const fetchNFTsForCollection = async (address, setFn) => {
  let endpoint = "getNFTsForCollection/";
  console.log("fetching nfts for collection:", endpoint);

  var requestOptions = {
    method: "GET",
  };
  const baseURL = `${config.rpcUrl}/${endpoint}`;
  const fetchURL = `${baseURL}?contractAddress=${address}&withMetadata=true`;
  const nfts = await fetch(fetchURL, requestOptions).then((data) =>
    data.json()
  );
  if (nfts && nfts.nfts.length) {
    console.log("NFTs in collection:", nfts);
    setFn(nfts.nfts);
  } else {
    alert("Collection does not have any NFTs");
  }
};
