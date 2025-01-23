import { Button, Image } from "@foundation";
import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";

export const CardAttendanceBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 28px;

  background-color: ${allColors.WHITE};

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    flex-direction: ${({ align }) =>
      align === "left" ? "row" : "row-reverse"};
    height: 400px;

    & > * {
      width: 50%;
    }
  }
`;

export const StyledImage = styled(Image)`
  height: 200px;
  img {
    border-radius: 28px;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    height: 100%;
  }
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 16px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    padding: 32px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: 16px;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 16px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    width: auto;
    margin-top: 32px;
    width: 200px;
    align-self: center;
  }
`;
