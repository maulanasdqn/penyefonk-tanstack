import { TInput } from "@/entities";
import { ReactElement, forwardRef } from "react";

export const InputCheckbox = forwardRef<HTMLInputElement, Omit<TInput, "type" | "size">>(
  (props, ref): ReactElement => {
    return (
      <input type="checkbox" data-testid="input-checkbox" {...props} id={props.name} ref={ref} />
    );
  },
);

InputCheckbox.displayName = "InputCheckbox";
