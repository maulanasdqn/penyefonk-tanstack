import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { TCommonForms } from "@/entities";

export type TOption<T = string | number> = {
  label: string;
  value: T;
};

export type TFieldSet = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
> &
  TCommonForms;
