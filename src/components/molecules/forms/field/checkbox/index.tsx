import { InputCheckbox, Fieldset } from "@/components";
import { TCommonForms, TInput } from "@/entities";
import { ReactElement, forwardRef } from "react";

export const FieldCheckbox = forwardRef<HTMLInputElement, TInput & TCommonForms>(
  (props, ref): ReactElement => {
    return (
      <Fieldset type="checkbox" {...props}>
        <InputCheckbox {...props} ref={ref} />
      </Fieldset>
    );
  },
);

FieldCheckbox.displayName = "FieldCheckbox";
