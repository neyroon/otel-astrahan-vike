import { FunctionComponent } from "preact";
import { CardLayoutBox } from "./card-layout.styles";

interface CardLayout {
  variant: "s" | "m";
}

export const CardLayout: FunctionComponent<CardLayout> = ({
  variant,
  children,
}) => {
  return <CardLayoutBox variant={variant}>{children}</CardLayoutBox>;
};
