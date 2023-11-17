import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";
import { ReactElement, useState } from "react";
import { TableHead, TableBody, Table } from "@/components";
import { TDataTable } from "./type";

export const DataTable = <T extends Record<string, unknown>>(
  props: TDataTable<T>,
): ReactElement => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: props.data,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    onPaginationChange: () => {},
    manualSorting: props.manualSorting,
    manualExpanding: props.manualExpanding,
    manualFiltering: props.manualFiltering,
    manualGrouping: props.manualGrouping,
    manualPagination: props.manualPagination,
  });

  return (
    <Table {...props}>
      <TableHead tableHead={table.getHeaderGroups()} />
      {props?.isLoading ? "Loading..." : <TableBody tableBody={table.getRowModel()} />}
    </Table>
  );
};
