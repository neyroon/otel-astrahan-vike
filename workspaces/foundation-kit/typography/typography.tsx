import { FunctionComponent } from 'preact';
import { TypographyProps } from './types';
import { TypographyBox } from './typography.styles';

export const Typography: FunctionComponent<TypographyProps> = ({
  as,
  size,
  color = 'main-button',
  children,
}) => {
  return (
    <TypographyBox $color={color} $size={size} as={as}>
      {children}
    </TypographyBox>
  );
};

export default Typography;
