import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const skewStyles = {
  base: "before:content-[''] before:absolute before:h-20 before:bottom-[-50px] before:right-0 before:left-0 before:bg-background before:skew-y-[-3deg] after:content-[''] after:absolute after:h-20 after:bottom-[-50px] after:right-0 after:left-0 after:bg-background after:skew-y-[-3deg]",
} as const;
