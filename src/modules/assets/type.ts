import { TMetaResponse } from "@/entities";

export type TAssetItem = {
  id: string;
  rank: number;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
};

export type TAssetHistoryItem = {
  priceUsd: string;
  time: number;
};

export type TAssetMarketItem = {
  exchangeId: string;
  baseId: string;
  quoteId: string;
  baseSymbol: string;
  quoteSymbol: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  volumePercent: string;
};

export type TAssetParam = {
  search?: string;
  ids?: string;
  limit?: number;
  offset?: number;
};

export type TAssetHistoryParam = {
  id?: string;
  interval?: string;
  offset?: number;
  start?: number;
  end?: number;
};

export type TAssetMarketParam = Pick<TAssetHistoryParam, "id" | "offset"> & { limit?: number };

export type TAssetAllResponse = TMetaResponse<TAssetItem[]>;

export type TAssetDetailResponse = TMetaResponse<TAssetItem>;

export type TAssetHistoryResponse = TMetaResponse<TAssetHistoryItem[]>;

export type TAssetMarketResponse = TMetaResponse<TAssetMarketItem[]>;
