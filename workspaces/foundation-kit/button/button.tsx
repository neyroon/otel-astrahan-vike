import { FunctionComponent } from 'preact';
import { ButtonBox } from './button.styles';

interface ButtonProps {
  className?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <ButtonBox className={className} {...rest}>
      {children}
    </ButtonBox>
  );
};

export default Button;
