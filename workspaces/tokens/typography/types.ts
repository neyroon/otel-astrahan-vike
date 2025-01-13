export type AllTypo =
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
  | "12"
  | "inherit";

export type Devices = "desktop" | "mobile";

export type FontWeight = 300 | 400 | "bold" | 600;

export type FontSize =
  | 80
  | 64
  | 48
  | 32
  | 28
  | 20
  | 18
  | 16
  | "16-bold"
  | 15
  | 13
  | 12;

export interface FontParams {
  weight: FontWeight | "inherit";
  size: FontSize | "inherit";
  lineHeight: number | "inherit";
}

export interface FontByDevice {
  desktop: FontParams;
  mobile: FontParams;
}

export type FontMap<T extends AllTypo> = {
  [key in T]: FontByDevice;
};

export interface Typography {
  allTypo: FontMap<AllTypo>;
}

export type TypefaceStyles = "LIGHT" | "BOOK" | "MEDIUM" | "BOLD";

export type Typeface = {
  [key in TypefaceStyles]: {
    weight: FontWeight;
  };
};

export type GetTypographyToken = (name: AllTypo) => FontParams;
