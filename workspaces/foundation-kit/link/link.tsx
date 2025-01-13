import { Colors } from "@tokens";
import { FunctionComponent } from "preact";
import { Size } from "../typography";
import { LinkBox } from "./link.styles";

interface LinkProps {
  className?: string;
  size: Size;
  color?: Colors;
}

export const Link: FunctionComponent<HTMLAnchorElement & LinkProps> = ({
  size,
  color = "content-primary",
  children,
  className,
  ...props
}) => {
  return (
    <LinkBox $size={size} $color={color} className={className} {...props}>
      {children}
    </LinkBox>
  );
};
