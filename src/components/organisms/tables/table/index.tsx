import { FC, ReactElement } from "react";
import { TTable } from "./type";
import { FieldSearch } from "@/components";

export const Table: FC<TTable> = (props): ReactElement => {
  return (
    <section className="shadow-md p-4 border rounded-lg w-full gap-y-4 flex flex-col">
      <FieldSearch {...props} />
      <div className="w-full overflow-x-auto">
        <table {...props} className="border border-gray-100 rounded-lg p-1 w-full">
          {props.children}
        </table>
      </div>
    </section>
  );
};
