import { InputRadio, Fieldset } from "@/components";
import { TCommonForms, TInput } from "@/entities";
import { ReactElement, forwardRef } from "react";

export const FieldRadio = forwardRef<HTMLInputElement, TInput & TCommonForms>(
  (props, ref): ReactElement => {
    return (
      <Fieldset type="checkbox" {...props}>
        <InputRadio {...props} ref={ref} />
      </Fieldset>
    );
  },
);

FieldRadio.displayName = "FieldRadio";
