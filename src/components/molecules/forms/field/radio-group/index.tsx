import { InputRadio, Fieldset, Label } from "@/components";
import { TCommonForms, TInput, TOption } from "@/entities";
import { ReactElement, forwardRef } from "react";

export const FieldRadioGroup = forwardRef<
  HTMLInputElement,
  TInput & TCommonForms & { options?: Array<TOption> }
>((props, ref): ReactElement => {
  return (
    <Fieldset type="radio" {...props}>
      {props.options?.map((option, key) => (
        <div className="flex gap-x-2" key={key}>
          <InputRadio key={key} value={option.value} {...props} ref={ref} />
          <Label size={props.size} className="text-gray-400 font-medium">
            {option.label}
          </Label>
        </div>
      ))}
    </Fieldset>
  );
});

FieldRadioGroup.displayName = "FieldRadioGroup";
