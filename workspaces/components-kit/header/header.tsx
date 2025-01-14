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
  MenuMobileList,
  MenuMobileListElement,
  MenuMobileNav,
  MenuMobileNavElement,
  NavigationContainer,
  NavigationLink,
  NavigationList,
  NavigationListItem,
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
            <NavigationList>
              <NavigationListItem>
                <NavigationLink size="15" href="/rooms">
                  Номера
                </NavigationLink>
              </NavigationListItem>
              <NavigationListItem>
                <NavigationLink size="15" href="/boat-rental">
                  Аренда лодок
                </NavigationLink>
              </NavigationListItem>
              <NavigationListItem>
                <NavigationLink size="15" href="/fishing">
                  Рыбалка
                </NavigationLink>
              </NavigationListItem>
              <NavigationListItem>
                <NavigationLink size="15" href="/hunting">
                  Охота
                </NavigationLink>
              </NavigationListItem>
              <NavigationListItem>
                <NavigationLink size="15" href="/romantic-getaway">
                  Романтический отдых
                </NavigationLink>
              </NavigationListItem>
            </NavigationList>
          </NavigationContainer>
          <LogotypeLink href="/" aria-label="Логотип">
            <Logotype />
          </LogotypeLink>
          <Contacts>
            <PhoneBox href="tel:+79208953030">
              <PhoneIcon />
              <Phone size="15" color="inherit">
                +7 920 895 30 30
              </Phone>
            </PhoneBox>
            <StyledButton href="/#reservation" size="s">
              Забронировать
            </StyledButton>
            <MenuButton aria-label="Меню" onClick={handleMenuButtonClick}>
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
              <MenuMobileList>
                <MenuMobileListElement>
                  <MenuMobileNavElement size="15" href="/rooms">
                    Номера
                  </MenuMobileNavElement>
                </MenuMobileListElement>
                <MenuMobileListElement>
                  <MenuMobileNavElement size="15" href="/boat-rental">
                    Аренда лодок
                  </MenuMobileNavElement>
                </MenuMobileListElement>
                <MenuMobileListElement>
                  <MenuMobileNavElement size="15" href="/fishing">
                    Рыбалка
                  </MenuMobileNavElement>
                </MenuMobileListElement>
                <MenuMobileListElement>
                  <MenuMobileNavElement size="15" href="/hunting">
                    Охота
                  </MenuMobileNavElement>
                </MenuMobileListElement>
                <MenuMobileListElement>
                  <MenuMobileNavElement size="15" href="/romantic-getaway">
                    Романтический отдых
                  </MenuMobileNavElement>
                </MenuMobileListElement>
                <MenuMobileListElement>
                  <MenuMobileNavElement size="15" href="/about">
                    О нашей базе
                  </MenuMobileNavElement>
                </MenuMobileListElement>
              </MenuMobileList>
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
                <Social
                  href="https://rutube.ru/channel/50338961/"
                  aria-label="Ссылка на rutube"
                >
                  <RutubeIcon />
                </Social>
                <Social href="tel:+74951505402" aria-label="Телефон">
                  <ViberIcon />
                </Social>
                <Social
                  href="https://vk.com/riverfishhotel"
                  aria-label="Ссылка на vk"
                >
                  <VkIcon />
                </Social>
                <Social
                  href="https://www.instagram.com/riverfish.hotel?igsh=YzZvbjlsNXloMW9h"
                  aria-label="Ссылка на instagram"
                >
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
