import { api } from "@/libs";
import {
  TAssetParam,
  TAssetAllResponse,
  TAssetDetailResponse,
  TAssetHistoryParam,
  TAssetHistoryResponse,
  TAssetMarketItem,
  TAssetMarketParam,
} from "./type";

export const getAllAssets = async (params: TAssetParam): Promise<TAssetAllResponse> => {
  const { data } = await api<TAssetAllResponse>({
    method: "GET",
    url: "/assets",
    params,
  });
  return data;
};

export const getDetailAsset = async (param: string): Promise<TAssetDetailResponse> => {
  const { data } = await api<TAssetDetailResponse>({
    method: "GET",
    url: `/assets/${param}`,
  });
  return data;
};

export const getHistoryAsset = async (
  params: TAssetHistoryParam,
): Promise<TAssetHistoryResponse> => {
  const { data } = await api<TAssetHistoryResponse>({
    method: "GET",
    url: `/assets/${params.id}/history`,
    params,
  });
  return data;
};

export const getMarketAsset = async (params: TAssetMarketParam): Promise<TAssetMarketItem> => {
  const { data } = await api<TAssetMarketItem>({
    method: "GET",
    url: `/assets/${params.id}/markets`,
    params,
  });
  return data;
};
