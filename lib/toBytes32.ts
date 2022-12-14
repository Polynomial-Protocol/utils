import { ethers } from "ethers";

export default function toBytes32(msg: string): string {
  return ethers.utils.formatBytes32String(msg);
}
