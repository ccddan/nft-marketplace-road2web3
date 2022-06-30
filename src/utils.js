import config from "./config";

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
