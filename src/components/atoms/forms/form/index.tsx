import { FC, ReactElement } from "react";
import { TForm } from "./type";

export const Form: FC<TForm> = (props): ReactElement => {
  return (
    <form className="flex flex-col w-full" data-testid="form" {...props}>
      {props.children}
    </form>
  );
};
