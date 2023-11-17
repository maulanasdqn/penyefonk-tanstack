import { TCommonForms, TInput } from "@/entities";

export type TInputText = Omit<TInput, "size"> & Pick<TCommonForms, "size" | "status">;
