import { FunctionComponent } from "preact";
import { CardAboutLayoutBox } from "./card-about-layout.styles";

export const CardAboutLayout: FunctionComponent = ({ children }) => {
  return <CardAboutLayoutBox>{children}</CardAboutLayoutBox>;
};
