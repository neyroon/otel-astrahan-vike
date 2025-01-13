import { FunctionComponent } from "preact";
import { NativeImage } from "../native";
import { ImageProps } from "./types";
import { Wrapper } from "./wrapper.styles";

export const Image: FunctionComponent<ImageProps> = ({
  className,
  ...props
}) => (
  <Wrapper className={className}>
    <NativeImage {...props} />
  </Wrapper>
);

export default Image;
