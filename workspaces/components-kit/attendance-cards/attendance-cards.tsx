import { Typography } from "@foundation";
import { FunctionalComponent } from "preact";
import { AttendanceCardsBox } from "./attendance-cards.styles";

export const AttendanceCards: FunctionalComponent = ({ children }) => {
  return (
    <AttendanceCardsBox>
      <Typography size="32">Наши услуги</Typography>
      {children}
    </AttendanceCardsBox>
  );
};
