import { ImgHTMLAttributes } from "react";

export type LinkToImage = string;

export type Sources = LinkToImage[];

export interface NativeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  sources?: Sources;
  responsive?: boolean;
  fullWidth?: boolean;
}

export type ImageProps = Omit<NativeImageProps, "sources">;
