import { FunctionFragment } from '@ethersproject/abi';
import { BytesLike, ethers, utils } from 'ethers';
import { useCallback, useMemo } from 'react';
import { Multicall__factory } from '../blockchain/contracts/MulticallFactory';

export function useMulticall(multicallAddress: string, provider: ethers.Signer | ethers.providers.Provider) {
  const Multicall = useMemo(() => {
      return Multicall__factory.connect(multicallAddress, provider);
  }, [multicallAddress, provider]);

  const aggerateQuery = useCallback(
    async (
      _calls: Array<{
        target: string;
        iface: utils.Interface;
        funcFrag: FunctionFragment;
        data: any[];
      }>
    ) => {
      const calls: Array<{ target: string; callData: BytesLike }> = _calls.map(
        c => {
          return {
            target: c.target,
            callData: c.iface.encodeFunctionData(c.funcFrag, c.data),
          };
        }
      );
      const { returnData, blockNumber } = await Multicall.callStatic.aggregate(
        calls
      );
      const returns = returnData.map((result, idx) => {
        const _ = _calls[idx];
        return _.iface.decodeFunctionResult(_.funcFrag, result);
      });
      return { returns, blockNumber };
    },
    [Multicall]
  );

  return { Multicall, aggerateQuery };
}
