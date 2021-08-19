import { BigNumber } from "@ethersproject/bignumber";
import { utils } from "ethers";
import { BaseErc20, BaseErc20Interface } from "./contracts/BaseErc20";
import { _abi as ERC20_ABI } from "./contracts/BaseErc20Factory";
import type { Multicall } from "./contracts/Multicall";

export type ERC20Profile = {
  tokenAddress: string;
  name: string;
  symbol: string;
  decimals: number;
  balance: BigNumber;
  updatedAtBlock: number;
};

export async function getProfileOfERC20(
  multicall: Multicall,
  token: BaseErc20,
  holder: string | null
): Promise<ERC20Profile> {
  const tokenAddress = token.address;
  const frag = [
    token.interface.encodeFunctionData("name"),
    token.interface.encodeFunctionData("symbol"),
    token.interface.encodeFunctionData("decimals"),
  ];
  if (holder)
    frag.push(token.interface.encodeFunctionData("balanceOf", [holder]));
  const calls = frag.map((callData) => ({
    target: tokenAddress,
    callData,
  }));
  const { returnData, blockNumber } = await multicall.callStatic.aggregate(
    calls
  );
  const [name] = token.interface.decodeFunctionResult("name", returnData[0]);
  const [symbol] = token.interface.decodeFunctionResult(
    "symbol",
    returnData[1]
  );
  const [decimals] = token.interface.decodeFunctionResult(
    "decimals",
    returnData[2]
  );
  let balance = BigNumber.from(0);
  if (returnData[3])
    [balance] = token.interface.decodeFunctionResult(
      "balanceOf",
      returnData[3]
    );

  return {
    updatedAtBlock: blockNumber.toNumber(),
    name,
    symbol,
    decimals,
    balance,
    tokenAddress,
  };
}

export async function getTotalSuppliesOf(
  multicall: Multicall,
  tokens: string[]
): Promise<BigNumber[]> {
  const tokenInterf = new utils.Interface(ERC20_ABI) as BaseErc20Interface;
  const calls = tokens.map((tokenAddress) => ({
    target: tokenAddress,
    callData: tokenInterf.encodeFunctionData("decimals"),
  }));
  const { returnData } = await multicall.callStatic.aggregate(calls);
  const decoded: BigNumber[] = returnData.map((d) => {
    const [totalSupply] = tokenInterf.decodeFunctionResult("totalSupply", d);
    return totalSupply;
  });
  return decoded;
}

export async function getBalancesOf(
  multicall: Multicall,
  who: string,
  tokens: string[]
): Promise<BigNumber[]> {
  const tokenInterf = new utils.Interface(ERC20_ABI) as BaseErc20Interface;
  const calls = tokens.map((tokenAddress) => ({
    target: tokenAddress,
    callData: tokenInterf.encodeFunctionData("balanceOf", [who]),
  }));
  const { returnData } = await multicall.callStatic.aggregate(calls);
  const decoded: BigNumber[] = returnData.map((d) => {
    const [balance] = tokenInterf.decodeFunctionResult("balanceOf", d);
    return balance;
  });
  return decoded;
}
