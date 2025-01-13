import { FunctionComponent } from "preact";
import { GroupBox } from "./group.styles";

export const Group: FunctionComponent = ({ children }) => {
  return <GroupBox>{children}</GroupBox>;
};
