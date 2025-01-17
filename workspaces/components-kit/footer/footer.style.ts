import { Button, Logotype, Typography } from "@foundation";
import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";

export const FooterBox = styled.footer`
  padding: 0 15px;
  margin-top: 40px;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    margin-top: 92px;
    padding: 40px 28px;
    border-top: 1px solid #45454524;
    border-top-right-radius: 26px;
    border-top-left-radius: 26px;
  }
`;
export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding-bottom: 40px;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    align-items: center;
    gap: 0px;
    justify-content: space-between;
    flex-direction: row;
  }
`;
export const TopLeftBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 28px;
  flex-direction: column-reverse;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: 0px;
    margin-right: 6vw;
    flex-direction: row;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
    margin-right: 9vw;
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    width: auto;
  }
`;
export const ContactsTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  gap: 28px;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    flex-direction: row;
    flex-shrink: 0;
    gap: 16px;
    width: 255px;
    margin-right: 9vw;
  }
`;
export const ButtonBox = styled.div`
  width: 100%;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    width: auto;
  }
`;

export const IconBoxTop = styled.a`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${allColors.DARK_GRAY};
  border-radius: 12px;

  &:hover {
    background-color: ${allColors.COLUMBIA_BLUE};
  }

  &:not(:last-child) {
    margin-right: 8px;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    width: 44px;
  }
`;

export const IconBox = styled.a`
  width: calc(50% - 4px);
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${allColors.DARK_GRAY};
  border-radius: 12px;

  &:hover {
    background-color: ${allColors.COLUMBIA_BLUE};
  }

  &:not(:last-child) {
    margin-right: 8px;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    width: 44px;
  }
`;
export const PhoneBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    align-items: baseline;
    gap: 2px;
  }
`;
export const AdressBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    align-items: baseline;
    gap: 2px;
  }
`;
export const TopRightBox = styled.div`
  width: 100%;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    flex-grow: 1;
    width: 70%;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
    width: 100%;
  }
`;
export const StyledButton = styled(Button)`
  width: 100%;
`;
export const MiddleBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #45454524;
  padding: 40px 0;
`;
export const MiddleLeftBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    align-items: start;
    width: auto;
  }
`;

export const MobileLogotypeBox = styled.div`
  display: block;
  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: none;
  }
`;

export const LogotypeBox = styled.div`
  display: none;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: block;
    width: 255px;
    margin-right: 9vw;
  }
`;
export const StyledLogotype = styled(Logotype)`
  width: 153px;
  height: 62px;
  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    width: 196px;
    height: 80px;
  }
`;
export const MiddleRightBox = styled.div`
  display: none;
  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: block;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: 60px;
    flex-direction: row;
    width: auto;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
    gap: 120px;
  }
`;
export const NavigationBox = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    align-items: start;
  }
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const InfoBoxMobile = styled.div`
  display: block;
  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: none;
  }
`;
export const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    align-items: end;
    gap: 4px;
  }
`;
export const WorkScheduleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    align-items: end;
    gap: 4px;
  }
`;
export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #45454524;
  padding: 40px 0;
  gap: 40px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    justify-content: space-between;
    flex-direction: row;
    gap: 0px;
    padding-bottom: 0;
  }
`;
export const BottomLeftBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    justify-content: space-between;
    flex-direction: row;
    gap: 0;
  }
`;
export const BottomRightBox = styled.div`
  display: flex;
  align-items: center;
`;
export const Copyright = styled.div`
  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    width: 255px;
    margin-right: 9vw;
  }
`;
export const Caution = styled(Typography)`
  max-width: 415px;
  text-align: center;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    max-width: 450px;
    text-align: start;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
    max-width: 642px;
  }
`;
