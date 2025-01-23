import { Typography } from "@foundation";
import { FunctionalComponent } from "preact";
import {
  CardAttendanceBox,
  RightBox,
  StyledButton,
  StyledImage,
  TextBox,
} from "./card-attendance.styles";

interface CardAttendanceProps {
  imageLink1x: string;
  imageLink2x: string;
  title: string;
  description: string;
  linkHref?: string;
  align?: "left" | "right";
}

export const CardAttendance: FunctionalComponent<CardAttendanceProps> = ({
  imageLink1x,
  imageLink2x,
  title,
  description,
  linkHref = "/reservation",
  align = "left",
}) => {
  return (
    <CardAttendanceBox align={align}>
      <StyledImage sources={[imageLink1x, imageLink2x]} />
      <RightBox>
        <TextBox>
          <Typography size="28">{title}</Typography>
          <Typography size="16" opacity={70}>
            {description}
          </Typography>
        </TextBox>
        <StyledButton size="s" href={linkHref}>
          Подробнее
        </StyledButton>
      </RightBox>
    </CardAttendanceBox>
  );
};
