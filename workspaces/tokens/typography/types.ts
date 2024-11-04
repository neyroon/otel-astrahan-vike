export type HeadingTypography =
  | 'HEADING1'
  | 'HEADING2'
  | 'HEADING3'
  | 'HEADING4';

export type InterfaceTypography =
  | 'BIG_TEXT'
  | 'NORMAL_TEXT'
  | 'BUTTON_TEXT'
  | 'INHERIT';

export type AllTypo =
  | HeadingTypography
  | InterfaceTypography;

export type Devices = 'desktop' | 'mobile';

export type FontWeight = 300 | 400 | 500;

export type FontSize =
  | 80
  | 58
  | 56
  | 50
  | 48
  | 45
  | 36
  | 34
  | 32
  | 28
  | 26
  | 24
  | 22
  | 20
  | 18
  | 16
  | 14
  | 13
  | 12
  | 11
  | 10;

export interface FontParams {
  weight: FontWeight | 'inherit';
  size: FontSize | 'inherit';
  lineHeight: number | 'inherit';
  tracking: number | 'inherit';
}

export interface FontByDevice {
  desktop: FontParams;
  mobile: FontParams;
}

export type FontMap<T extends AllTypo> = {
  [key in T]: FontByDevice;
};

export interface Typography {
  interface: FontMap<InterfaceTypography>;
  heading: FontMap<HeadingTypography>;
}

export type TypefaceStyles = 'LIGHT' | 'BOOK' | 'MEDIUM';

export type Typeface = {
  [key in TypefaceStyles]: {
    weight: FontWeight;
  };
};

export type GetTypographyToken = (name: AllTypo) => FontParams;
