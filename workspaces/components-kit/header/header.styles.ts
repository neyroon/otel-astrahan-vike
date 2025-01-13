import { Button, Link } from "@foundation";
import { styled } from "@linaria/react";
import { allColors, breakpoints } from "@tokens";

export const HeaderBox = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  padding: 0;
  z-index: 101;
  background-color: ${allColors.WHITE};
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
  }
`;

export const HeaderContainer = styled.div`
  padding: 16px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    padding: 16px 28px;
  }
`;

export const NavigationContainer = styled.nav`
  display: none;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: block;
    display: flex;
    gap: 32px;
    align-items: center;
  }
`;

export const NavigationLink = styled(Link)``;

export const LogotypeLink = styled.a`
  svg {
    width: 94px;
    height: 36px;
  }
  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    svg {
      width: 136px;
      height: 56px;
    }
  }
`;

export const Contacts = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: 32px;
  }
`;

export const PhoneBox = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 16px;
  border: 1px solid ${allColors.COLUMBIA_BLUE};

  svg {
    width: 20px;
    height: 20px;
  }

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    gap: 12px;
    border: 0;
    width: auto;
    height: auto;
    justify-content: baseline;
    padding: 0px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Phone = styled(Link)`
  display: none;

  @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
    display: block;
  }
`;

export const StyledButton = styled(Button)`
  display: none;
  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: block;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 16px;
  cursor: pointer;
  background-color: ${allColors.MAIN_BUTTON};
  border: none;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: none;
  }
`;

export const MenuItemContainer = styled.div`
  width: 18px;
  height: 12px;
  position: relative;
  transform: rotate(0deg);
`;

export const MenuItem = styled.span`
  display: block;
  position: absolute;
  background-color: ${allColors.WHITE};
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  width: 100%;
  height: 2px;

  &:nth-child(1) {
    top: ${({ isOpen }) => (isOpen ? "5px" : "0")};
    width: ${({ isOpen }) => (isOpen ? "0" : "100%")};
    left: ${({ isOpen }) => (isOpen ? "50%" : "0")};
  }
  &:nth-child(2),
  &:nth-child(3) {
    top: 5px;
  }

  &:nth-child(2) {
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "none")};
  }

  &:nth-child(3) {
    transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "none")};
  }

  &:nth-child(4) {
    top: ${({ isOpen }) => (isOpen ? "5px" : "10px")};
    width: ${({ isOpen }) => (isOpen ? "0" : "100%")};
    left: ${({ isOpen }) => (isOpen ? "50%" : "0")};
  }
`;

export const MenuMobile = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  z-index: 100;
  height: 100vh;
  height: 100dvh;
  background-color: ${allColors.DARK_GRAY};

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

export const MenuMobileContainer = styled.div`
  overflow-y: scroll;
  margin-top: 72px;
  height: calc(100% - 72px);
  padding: 16px 15px 22px;
`;

export const MenuMobileNav = styled.nav`
  padding: 12px;
  background-color: ${allColors.WHITE};
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin-top: 16px;
`;

export const MenuMobileNavElement = styled(Link)`
  padding: 16px 12px;
  border-radius: 12px;
`;

export const MenuMobileContacts = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${allColors.WHITE};
  border-radius: 20px;
  gap: 26px;
  margin-top: 15px;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 12px;
  height: 44px;
  background-color: ${allColors.DARK_GRAY};
  gap: 14px;
  width: calc(50% - 7px);
`;
