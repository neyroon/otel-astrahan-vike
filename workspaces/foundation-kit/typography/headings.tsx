import { FunctionComponent } from "preact";
import { TypographyProps } from "./types";
import {
  TypographyBoxHeading2,
  TypographyBoxHeading3,
} from "./typography.styles";

export const Heading2: FunctionComponent<TypographyProps> = ({
  size,
  color = "content-primary",
  className,
  children,
}) => {
  return (
    <TypographyBoxHeading2 $color={color} $size={size} className={className}>
      {children}
    </TypographyBoxHeading2>
  );
};

export const Heading3: FunctionComponent<TypographyProps> = ({
  size,
  color = "content-primary",
  className,
  children,
}) => {
  return (
    <TypographyBoxHeading3 $color={color} $size={size} className={className}>
      {children}
    </TypographyBoxHeading3>
  );
};
