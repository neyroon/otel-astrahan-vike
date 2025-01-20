import { colors, Colors } from "@tokens";
import { FunctionComponent } from "preact";
import {
  Description,
  SectionBox,
  TextBox,
  Title,
  TitleAlone,
} from "./section.styles";

interface SectionProps {
  backgroundColor?: Colors;
  title?: string;
  description?: string;
  align?: "left" | "center";
  withBorderBottom?: boolean;
  withPadding?: boolean;
  doublePaddingTop?: boolean;
  withBorderRadiusTop?: boolean;
  withBorderRadiusBottom?: boolean;
  className?: string;
  id?: string;
}

export const Section: FunctionComponent<SectionProps> = ({
  children,
  backgroundColor = "white",
  title,
  description,
  align = "left",
  withBorderBottom,
  withPadding = true,
  doublePaddingTop = false,
  withBorderRadiusTop,
  withBorderRadiusBottom,
  className,
  ...rest
}) => {
  return (
    <SectionBox
      align={align}
      backgroundColor={colors[backgroundColor]}
      withBorderBottom={withBorderBottom}
      withPadding={withPadding}
      doublePaddingTop={doublePaddingTop}
      withBorderRadiusTop={withBorderRadiusTop}
      withBorderRadiusBottom={withBorderRadiusBottom}
      className={className}
      {...rest}
    >
      {title && (
        <>
          {title && description ? (
            <TextBox>
              <Title size="32">{title}</Title>
              {description && (
                <Description size="18" color="gray">
                  {description}
                </Description>
              )}
            </TextBox>
          ) : (
            <TitleAlone size="32">{title}</TitleAlone>
          )}
        </>
      )}
      {children}
    </SectionBox>
  );
};
