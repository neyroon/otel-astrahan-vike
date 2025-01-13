import { FunctionComponent } from "preact";
import { TypographyProps } from "./types";
import { TypographyBox } from "./typography.styles";

export const Typography: FunctionComponent<TypographyProps> = ({
  size,
  color = "content-primary",
  opacity,
  className,
  children,
}) => {
  return (
    <TypographyBox
      $color={color}
      $size={size}
      $opacity={opacity}
      className={className}
    >
      {children}
    </TypographyBox>
  );
};

export default Typography;
