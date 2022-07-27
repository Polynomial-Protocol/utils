import { ethers, BigNumber } from "ethers";

export default function fromBN(val: BigNumber): string {
  return ethers.utils.formatUnits(val, 18);
}
