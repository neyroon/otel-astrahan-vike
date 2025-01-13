import { NativeImageProps } from "../native";

export type Size = "icon" | "hero" | "card" | "wide";

export interface ImageProps extends NativeImageProps {}

export type PropsMap<T extends Size, K> = {
  [key in T]: K;
};
