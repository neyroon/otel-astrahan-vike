import { Link, Typography } from "@foundation";
import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import {
  Logotype,
  PhoneIcon,
  RutubeIcon,
  SocIcon,
  ViberIcon,
  VkIcon,
} from "../../foundation-kit/icons";
import {
  Contact,
  Contacts,
  HeaderBox,
  HeaderContainer,
  LogotypeLink,
  MenuButton,
  MenuItem,
  MenuItemContainer,
  MenuMobile,
  MenuMobileContacts,
  MenuMobileContainer,
  MenuMobileNav,
  MenuMobileNavElement,
  NavigationContainer,
  NavigationLink,
  Phone,
  PhoneBox,
  Social,
  SocialContainer,
  StyledButton,
} from "./header.styles";

export const Header: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuButtonClick = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const bodyElement = document.getElementsByTagName("body")[0];

    if (isOpen) {
      bodyElement.style.overflow = "hidden";
    } else {
      bodyElement.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <>
      <HeaderBox>
        <HeaderContainer>
          <NavigationContainer>
            <NavigationLink size="15" href="/rooms">
              Номера
            </NavigationLink>
            <NavigationLink size="15" href="/boat-rental">
              Аренда лодок
            </NavigationLink>
            <NavigationLink size="15" href="/fishing">
              Рыбалка
            </NavigationLink>
            <NavigationLink size="15" href="/hunting">
              Охота
            </NavigationLink>
            <NavigationLink size="15" href="/romantic-getaway">
              Романтический отдых
            </NavigationLink>
          </NavigationContainer>
          <LogotypeLink href="/">
            <Logotype />
          </LogotypeLink>
          <Contacts>
            <PhoneBox href="tel:+79208953030">
              <PhoneIcon />
              <Phone size="15">+7 920 895 30 30</Phone>
            </PhoneBox>
            <StyledButton size="s">Забронировать</StyledButton>
            <MenuButton onClick={handleMenuButtonClick}>
              <MenuItemContainer>
                <MenuItem isOpen={isOpen} />
                <MenuItem isOpen={isOpen} />
                <MenuItem isOpen={isOpen} />
                <MenuItem isOpen={isOpen} />
              </MenuItemContainer>
            </MenuButton>
          </Contacts>
        </HeaderContainer>
      </HeaderBox>

      {isOpen && (
        <MenuMobile>
          <MenuMobileContainer>
            <MenuMobileNav>
              <MenuMobileNavElement size="15" href="/rooms">
                Номера
              </MenuMobileNavElement>
              <MenuMobileNavElement size="15" href="/boat-rental">
                Аренда лодок
              </MenuMobileNavElement>
              <MenuMobileNavElement size="15" href="/fishing">
                Рыбалка
              </MenuMobileNavElement>
              <MenuMobileNavElement size="15" href="/hunting">
                Охота
              </MenuMobileNavElement>
              <MenuMobileNavElement size="15" href="/romantic-getaway">
                Романтический отдых
              </MenuMobileNavElement>
              <MenuMobileNavElement size="15" href="/about">
                О нашей базе
              </MenuMobileNavElement>
            </MenuMobileNav>
            <MenuMobileContacts>
              <Contact>
                <Typography size="15" opacity={60}>
                  Телефон:
                </Typography>
                <Link size="16-bold" href="tel:+74951505402">
                  +7 495 150-54-02
                </Link>
              </Contact>
              <Contact>
                <Typography size="15" opacity={60}>
                  Почта для связи:
                </Typography>
                <Link size="16-bold" href="mailto:riverfish-hotel@yandex.ru">
                  riverfish-hotel@yandex.ru
                </Link>
              </Contact>
              <Contact>
                <Typography size="15" opacity={60}>
                  График работы:
                </Typography>
                <Typography size="16-bold">пн–вс | 10:00 – 20:00</Typography>
              </Contact>
              <SocialContainer>
                <Social href="https://rutube.ru/channel/50338961/">
                  <RutubeIcon />
                </Social>
                <Social href="tel:+74951505402">
                  <ViberIcon />
                </Social>
                <Social href="https://vk.com/riverfishhotel">
                  <VkIcon />
                </Social>
                <Social href="https://www.instagram.com/riverfish.hotel?igsh=YzZvbjlsNXloMW9h">
                  <SocIcon />
                </Social>
              </SocialContainer>
            </MenuMobileContacts>
          </MenuMobileContainer>
        </MenuMobile>
      )}
    </>
  );
};
