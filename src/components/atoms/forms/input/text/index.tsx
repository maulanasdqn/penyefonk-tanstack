import { TCommonForms, TInput } from "@/entities";
import { forwardRef, ReactElement } from "react";
import { inputClassName } from "@/utils";

export const InputText = forwardRef<HTMLInputElement, Omit<TInput, "size"> & TCommonForms>(
  ({ size, ...props }, ref): ReactElement => {
    return (
      <input
        data-testid="input-text"
        className={inputClassName({ size, ...props })}
        {...props}
        ref={ref}
        id={props.name}
      />
    );
  },
);

InputText.displayName = "InputText";
