pragma solidity >=0.4.21 <0.6.0;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract Verifier {
    function verifyTx(
            uint[2] calldata a,
            uint[2] calldata a_p,
            uint[2][2] calldata b,
            uint[2] calldata b_p,
            uint[2] calldata c,
            uint[2] calldata c_p,
            uint[2] calldata h,
            uint[2] calldata k,
            uint[2] calldata input
        ) external returns (bool r);
}


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
import "./ERC721Mintable.sol";
contract SolnSquareVerifier is ERC721Mintable {

  uint256 tokenId;
  Verifier verifierContract;

  constructor (address verifierAdr, string memory name, string memory symbol)
  ERC721Mintable(name, symbol)
    public {
    verifierContract = Verifier(verifierAdr);
    tokenId = 1;
  }

  // TODO define a solutions struct that can hold an index & an address
  struct Solution {
    address solutionAdr;
    uint256 index;
  }

  // TODO define an array of the above struct
  Solution[] private solutions;

  // TODO define a mapping to store unique solutions submitted
  mapping(bytes32 => Solution) private uniqueSolutions;

  // TODO Create an event to emit when a solution is added
  event SolutionE(address, uint256);

  // TODO Create a function to add the solutions to the array and emit the event
  function addSolution (address to, bytes32 key) internal {
    uniqueSolutions[key] = Solution(to, tokenId);
    solutions.push(Solution(to, tokenId));
    emit SolutionE(to, tokenId);
  }

  // TODO Create a function to mint new NFT only after the solution has been verified
  //  - make sure the solution is unique (has not been used before)
  //  - make sure you handle metadata as well as tokenSuplly

  event MintSsv(uint256);
  function mint(address to,
    uint[2] memory a,
    uint[2] memory a_p,
    uint[2][2] memory b,
    uint[2] memory b_p,
    uint[2] memory c,
    uint[2] memory c_p,
    uint[2] memory h,
    uint[2] memory k,
    uint[2] memory input) public {

    bytes32 key = keccak256(
      abi.encodePacked(a, a_p, b, b_p, c, c_p, h, k, input));
    require(uniqueSolutions[key].solutionAdr != to, "solution used before");
    if (verifierContract.verifyTx(a, a_p, b, b_p, c, c_p, h, k, input)) {
      addSolution(to, key);
      ERC721Mintable.mint(to, tokenId);
      tokenId++;
      emit MintSsv(totalSupply());
    }
  }

}

























