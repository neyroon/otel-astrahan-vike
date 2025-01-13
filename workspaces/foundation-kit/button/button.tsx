import { FunctionComponent } from "preact";
import { Typography } from "../typography";
import { ButtonBox } from "./button.styles";
import { ButtonSize } from "./types";

interface ButtonProps {
  className?: string;
  size?: ButtonSize;
  design?: "primary" | "secondary";
}

export const Button: FunctionComponent<ButtonProps> = ({
  className,
  children,
  size = "m",
  design = "primary",
  ...rest
}) => {
  return (
    <ButtonBox className={className} size={size} design={design} {...rest}>
      <Typography size="15" color="inherit">
        {children}
      </Typography>
    </ButtonBox>
  );
};

export default Button;
