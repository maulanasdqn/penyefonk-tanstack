import { InputText, Fieldset } from "@/components";
import { TCommonForms, TInput } from "@/entities";
import { ReactElement, forwardRef } from "react";

export const FieldText = forwardRef<HTMLInputElement, TInput & Omit<TCommonForms, "text">>(
  ({ size, ...props }, ref): ReactElement => {
    return (
      <Fieldset size={size} {...props}>
        <InputText {...props} ref={ref} size={size} />
      </Fieldset>
    );
  },
);

FieldText.displayName = "FieldText";
