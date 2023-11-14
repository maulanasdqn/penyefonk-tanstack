import { TInput } from "@/entities";
import { ReactElement, forwardRef } from "react";

export const InputRadio = forwardRef<HTMLInputElement, Omit<TInput, "type">>(
  (props, ref): ReactElement => {
    return <input type="radio" data-testid="input-radio" {...props} ref={ref} />;
  },
);

InputRadio.displayName = "InputRadio";
