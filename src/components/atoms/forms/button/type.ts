import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "secondary" | "error" | "warning" | "cancel" | "success";
  size?: "sm" | "md" | "lg";
  loading?: "true" | "false";
  href?: string;
};
