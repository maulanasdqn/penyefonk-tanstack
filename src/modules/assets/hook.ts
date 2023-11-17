import { UseQueryResult, useQuery } from "@tanstack/react-query";
import {
  TAssetAllResponse,
  TAssetDetailResponse,
  TAssetHistoryParam,
  TAssetHistoryResponse,
  TAssetMarketItem,
  TAssetMarketParam,
  TAssetParam,
} from "./type";
import { TMetaErrorResponse } from "@/entities";
import { getAllAssets, getDetailAsset, getHistoryAsset, getMarketAsset } from "./api";

export const useGetAllAssets = (
  params: TAssetParam,
): UseQueryResult<TAssetAllResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["assets", params],
    queryFn: async () => await getAllAssets(params),
  });

export const useGetDetailAsset = (
  param: string,
): UseQueryResult<TAssetDetailResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["detail-asset", param],
    queryFn: async () => await getDetailAsset(param),
  });

export const useGetHistoryAsset = (
  params: TAssetHistoryParam,
): UseQueryResult<TAssetHistoryResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["history-asset", params],
    queryFn: async () => await getHistoryAsset(params),
  });

export const useGetMarketAssets = (
  params: TAssetMarketParam,
): UseQueryResult<TAssetMarketItem, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["market-asset", params],
    queryFn: async () => await getMarketAsset(params),
  });
