import { InputText } from "@/components";
import { FC, ReactElement } from "react";
import { TSearch } from "./type";

export const FieldSearch: FC<TSearch> = (props): ReactElement => {
  return (
    <InputText
      type="search"
      size="md"
      placeholder={props.placeholder || "Cari data..."}
      onChange={props.handleSearch}
    />
  );
};
