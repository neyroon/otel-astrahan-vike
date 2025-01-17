import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";
import { Heading2, Heading3 } from "../../foundation-kit";

export const SectionBox = styled.section`
  padding: ${({ withPadding }) => (withPadding ? "15px" : "15px 0")};
  padding-top: ${({ doublePaddingTop }) =>
    doublePaddingTop ? "44px" : "20px"};
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};
  position: relative;
  padding-bottom: ${({ withBorderBottom }) =>
    withBorderBottom ? `28px` : "28px"};
  margin-bottom: ${({ withBorderBottom }) =>
    withBorderBottom ? `8px` : "unset"};
  border-top-left-radius: ${({ withBorderRadiusTop }) =>
    withBorderRadiusTop ? `28px` : "unset"};
  border-top-right-radius: ${({ withBorderRadiusTop }) =>
    withBorderRadiusTop ? `28px` : "unset"};
  border-bottom-left-radius: ${({ withBorderRadiusBottom }) =>
    withBorderRadiusBottom ? `28px` : "unset"};
  border-bottom-right-radius: ${({ withBorderRadiusBottom }) =>
    withBorderRadiusBottom ? `28px` : "unset"};

  &:after {
    content: "";
    bottom: 0;
    width: calc(100% - 30px);
    border-bottom: ${({ withBorderBottom }) =>
      withBorderBottom ? `1px solid ${allColors.COLUMBIA_BLUE}` : "unset"};
    position: absolute;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    padding: ${({ withPadding }) => (withPadding ? "28px" : "28px 0")};
    padding-top: ${({ doublePaddingTop }) =>
      doublePaddingTop ? "56px" : "28px"};
    padding-bottom: ${({ withBorderBottom }) =>
      withBorderBottom ? `56px` : "28px"};
    margin-bottom: ${({ withBorderBottom }) =>
      withBorderBottom ? `28px` : "unset"};

    &:after {
      width: calc(100% - 56px);
    }
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
