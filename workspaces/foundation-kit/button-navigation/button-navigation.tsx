import { FunctionComponent } from "preact";
import { ButtonNavigationBox } from "./button-navigation.styles";
import { ButtonSize } from "./types";

interface ButtonProps {
  className?: string;
  size?: ButtonSize;
  withBorder?: boolean;
  onClick?: () => void;
}

export const ButtonNavigation: FunctionComponent<ButtonProps> = ({
  className,
  children,
  onClick,
  ...rest
}) => {
  return (
    <ButtonNavigationBox className={className} onClick={onClick} {...rest}>
      {children}
    </ButtonNavigationBox>
  );
};
