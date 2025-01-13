import { Typography } from "../../foundation-kit";
import {
  CardAboutBox,
  StyledImage,
  StyledTypography,
  TextBox,
} from "./card-about.styles";

export const CardAbout = ({ number, text, imageLink1x, imageLink2x }) => {
  return (
    <CardAboutBox>
      <TextBox>
        <Typography size="80" color="content-primary">
          {number}
        </Typography>
        <StyledTypography size="16" color="gray">
          {text}
        </StyledTypography>
      </TextBox>
      <StyledImage sources={[imageLink1x, imageLink2x]} />
    </CardAboutBox>
  );
};
