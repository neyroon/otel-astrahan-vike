import { Button, Typography } from "@foundation";
import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";

export const YmapsBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  iframe {
    border-radius: 28px;
    height: 279px;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: block;
    iframe {
      border-radius: 28px;
      height: 545px;
    }
  }
`;

export const YmapsCard = styled.div`
  background-color: ${allColors.WHITE};
  padding: 20px;
  border-radius: 28px;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    width: 448px;
    padding: 26px;
    position: absolute;
    left: 40px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
    width: 548px;
  }
`;

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${allColors.COLUMBIA_BLUE};
  padding-bottom: 16px;
  margin-bottom: 16px;
`;

export const Title = styled(Typography)`
  margin-bottom: 8px;
`;

export const Description = styled(Typography)`
  margin-bottom: 8px;
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const InfoBlock = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
export const IconBox = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${allColors.DARK_GRAY};
`;
export const InfoText = styled(Typography)``;
export const StyledButton = styled(Button)`
  width: 100%;
`;
