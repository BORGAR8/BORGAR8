let NFT = [];

function mintNFT(name, haircolor, bodytype, size) {
    //object
    const nft = {
        name : name,
        haircolor : haircolor,
        bodytype : bodytype ,
        size : size
    };
    NFT.push(nft);

}

//loop that will go through an "array" of NFTs
function listNFTs () {
    for (let i = 0; i < NFT.length; i++) {
        console.log("Name: " + NFT[i].name);
        console.log("Hair Color: " + NFT[i].haircolor);
        console.log("Body Type: " + NFT[i].bodytype);
        console.log("Size: " + NFT[i].size);
        console.log("\n"); // Add a new line for better readability
    };
}

// Print the total number of NFTs
function getTotalSupply() {
    return NFT.length;
}

// Call your functions below this line

// Mint some NFTs
const myNFTs = [];
myNFTs.push(mintNFT("Sheila", "Blue", "Chubby", "Large"));
myNFTs.push(mintNFT("Zion", "Silver", "Muscular", "Medium"));
myNFTs.push(mintNFT("Blythe", "Pink", "Curvy", "Small"));


// List all NFTs
listNFTs(myNFTs);

// Get the total supply of NFTs
console.log("Total number of NFTs: " + getTotalSupply());