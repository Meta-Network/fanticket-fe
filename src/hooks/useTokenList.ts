import { useCallback, useEffect, useMemo, useState } from "react";

import { utils } from "ethers";
import { currentChainId } from "../constant";
import axios from "axios";
import {
  StandardTokenProfile,
  StandardTokenList,
} from "../backend/typing/token.type";

export function useTokenList(url: string) {
  // token 列表
  const [tokenList, setTokenList] = useState<StandardTokenProfile[]>([]);
  // token all 信息
  const [tokens, setTokens] = useState<StandardTokenList | null>(null);
  const [searchInput, setSearchInput] = useState<string>("");
  // 是否为合约地址
  const isContractAddress = useMemo(() => utils.isAddress(searchInput), [
    searchInput,
  ]);

  // 请求 token 列表
  const tokenListFetch = useCallback(async () => {
    try {
      const res = await axios.get<StandardTokenList>(url);

      if (res.status === 200) {
        const selectedChainId: number = currentChainId;

        const list = res.data.tokens.filter(
          (i) => Number(i.chainId) === Number(selectedChainId)
        );

        setTokenList(list);
        setTokens(res.data);
      } else {
        throw new Error("status is not 200");
      }
    } catch (error) {
      setTokenList([]);
      setTokens({} as StandardTokenList);
    }
  }, [url]);

  // 设置搜索内容
  const setSearchInputFn = (val: string) => setSearchInput(val);

  // 执行一次 默认获取一次 token 列表
  useEffect(() => {
    tokenListFetch();
  }, [url]);

  // 当前 token 列表，筛选后
  const tokenListCurrent = useMemo(() => {
    if (searchInput === "") {
      return tokenList;
    } else if (isContractAddress) {
      // 如果地址在 列表里面
      const findInList = tokenList.find(
        (t) => utils.getAddress(t.address) === utils.getAddress(searchInput)
      );

      if (findInList) return [findInList];
    } else {
      // name / symbol search
      return tokenList.filter(
        (i) =>
          i.name
            .toLocaleLowerCase()
            .includes(searchInput.toLocaleLowerCase()) ||
          i.symbol.toUpperCase().includes(searchInput.toUpperCase())
      );
    }
  }, [tokenList, searchInput, isContractAddress]);

  return {
    tokens,
    tokenListCurrent,
    setSearchInputFn,
    isContractAddress,
  };
}
