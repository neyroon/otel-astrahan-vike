import { Button, Typography } from "@foundation";
import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: 32px;
  }
`;

export const TopTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: 16px;
  }
`;
export const MiddleText = styled(Typography)`
  margin-bottom: 8px;
  font-size: 16px;
  display: block;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    margin-bottom: 12px;
  }
`;
export const List = styled.ul`
  margin: 0;
  padding-inline-start: 30px;
`;
export const ListItem = styled.li`
  line-height: 20px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    line-height: 28px;
  }
`;
export const ListBlock = styled.div``;
export const StyledButton = styled(Button)`
  width: 100%;
  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    width: fit-content;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: block;
  }
`;
