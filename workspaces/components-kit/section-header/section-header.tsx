import { FunctionComponent } from "preact";
import { SectionHeaderBox } from "./section-header.styles";

export const SectionHeader: FunctionComponent = ({ children }) => {
  return <SectionHeaderBox>{children}</SectionHeaderBox>;
};
