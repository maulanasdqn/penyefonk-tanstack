import { DataTable } from "@/components";
import { ColumnDef } from "@tanstack/react-table";
import { ChangeEvent, FC, ReactElement, useMemo, useState } from "react";
import { TAssetItem, TAssetParam } from "./type";
import { useGetAllAssets } from "./hook";
import { useDebounce } from "..";
import { formatCurrency } from "@/utils";

export const AssetModules: FC = (): ReactElement => {
  const [debounceValue, setDebounceValue] = useState<string>("");
  const [params, setParams] = useState<TAssetParam>({
    search: "",
    ids: "",
    limit: 10,
    offset: 0,
  });

  const { data: getAllAssets, isLoading } = useGetAllAssets(params);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setDebounceValue(e.target.value);
  };

  useDebounce(() => {
    setParams({
      ...params,
      search: debounceValue,
    });
  }, 500);

  const columns: ColumnDef<TAssetItem>[] = useMemo(
    () => [
      {
        header: "ID",
        accessorKey: "id",
      },
      {
        header: "Rank",
        accessorKey: "rank",
      },
      {
        header: "Symbol",
        accessorKey: "symbol",
      },
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Supply",
        accessorKey: "supply",
      },
      {
        header: "Max Supply",
        accessorKey: "maxSupply",
        cell: (row) => formatCurrency(row.getValue()),
      },
      {
        header: "Market Cap USD",
        accessorKey: "marketCapUsd",
        cell: (row) => formatCurrency(row.getValue()),
      },
      {
        header: "Volume USD 24Hr",
        accessorKey: "volumeUsd24Hr",
        cell: (row) => formatCurrency(row.getValue()),
      },
      {
        header: "Price USD",
        accessorKey: "priceUsd",
        cell: (row) => formatCurrency(row.getValue()),
      },
      {
        header: "Change 24Hr",
        accessorKey: "changePercent24Hr",
      },
      {
        header: "VWAP 24Hr",
        accessorKey: "vwap24Hr",
      },
    ],
    [],
  );
  return (
    <DataTable
      isLoading={isLoading}
      handleSearch={handleSearch}
      columns={columns}
      data={getAllAssets?.data || []}
    />
  );
};
