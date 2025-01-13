import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";
import { Heading2, Heading3 } from "../../foundation-kit";

export const SectionBox = styled.section`
  padding: ${({ withPadding }) => (withPadding ? "15px" : "15px 0")};
  padding-top: ${({ doublePaddingTop }) =>
    doublePaddingTop ? "44px" : "15px"};
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};
  border-bottom: ${({ withBorderBottom }) =>
    withBorderBottom ? `1px solid ${allColors.COLUMBIA_BLUE}` : "unset"};
  padding-bottom: ${({ withBorderBottom }) =>
    withBorderBottom ? `28px` : "28px"};
  margin-bottom: ${({ withBorderBottom }) =>
    withBorderBottom ? `28px` : "unset"};

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    padding: ${({ withPadding }) => (withPadding ? "28px" : "28px 0")};
    padding-top: ${({ doublePaddingTop }) =>
      doublePaddingTop ? "56px" : "28px"};
    padding-bottom: ${({ withBorderBottom }) =>
      withBorderBottom ? `56px` : "28px"};
    margin-bottom: ${({ withBorderBottom }) =>
      withBorderBottom ? `28px` : "unset"};
  }
`;

export const TextBox = styled.div<{ align: string }>`
  max-width: 100%;
  margin-bottom: 28px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    max-width: 32%;
    margin-bottom: 64px;
  }
`;

export const Title = styled(Heading2)`
  margin-bottom: 16px;
`;
export const TitleAlone = styled(Heading2)`
  margin-bottom: 32px;
`;

export const Description = styled(Heading3)`
  opacity: 60%;
`;
