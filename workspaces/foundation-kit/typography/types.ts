import { Colors } from "@tokens";

export type As = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";

export type Size =
  | "80"
  | "64"
  | "48"
  | "32"
  | "28"
  | "20"
  | "18"
  | "16"
  | "16-bold"
  | "15"
  | "12";

export type MixinsMap<T extends Size, K> = {
  [key in T]: K;
};

export interface TypographyProps {
  size: Size;
  color?: Colors;
  opacity?: number;
  className?: string;
}
