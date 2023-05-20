import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Koinos CyborgPunks"
  export const SYMBOL: string = "KCPunks";
  export const MINT_PRICE: u64 = 0;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = 50;
  export const URI: string = "https://bafybeiesdsswvimmceq7b5fpnckiieeubjgixcxzleglvzhfflvkzuu36q.ipfs.nftstorage.link/";
  export const OWNER: Uint8Array = Base58.decode("17SvQYVtXLb4cKLQWpmZ2yWeQ2ACFAhgZW");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("");
}
