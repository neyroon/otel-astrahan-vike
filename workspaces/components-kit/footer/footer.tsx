import {
  Link,
  RutubeIcon,
  SocIcon,
  Typography,
  ViberIcon,
  VkIcon,
} from "@foundation";
import {
  AdressBox,
  BottomBox,
  BottomLeftBox,
  BottomRightBox,
  ButtonBox,
  Caution,
  ContactsTop,
  Copyright,
  EmailBox,
  FooterBox,
  IconBox,
  Icons,
  InfoBox,
  InfoBoxMobile,
  LogotypeBox,
  MiddleBox,
  MiddleLeftBox,
  MiddleRightBox,
  MobileLogotypeBox,
  Navigation,
  NavigationBox,
  PhoneBox,
  StyledButton,
  StyledLogotype,
  TopBox,
  TopLeftBox,
  TopRightBox,
  WorkScheduleBox,
} from "./footer.style";

export const Footer = () => {
  return (
    <FooterBox>
      <TopBox>
        <MobileLogotypeBox>
          <StyledLogotype />
        </MobileLogotypeBox>
        <TopLeftBox>
          <InfoBoxMobile>
            <InfoBox>
              <EmailBox>
                <Typography size="15" opacity={60}>
                  Почта для связи:
                </Typography>
                <Link size="16-bold" href="mailto:riverfish-hotel@yandex.ru">
                  riverfish-hotel@yandex.ru
                </Link>
              </EmailBox>
              <WorkScheduleBox>
                <Typography size="15" opacity={60}>
                  График работы:
                </Typography>
                <Typography size="16-bold">пн–вс | 10:00 – 20:00</Typography>
              </WorkScheduleBox>
            </InfoBox>
          </InfoBoxMobile>
          <ContactsTop>
            <Icons>
              <IconBox
                href="https://rutube.ru/channel/50338961/"
                aria-label="Ссылка на rutube"
              >
                <RutubeIcon />
              </IconBox>
              <IconBox href="tel:+74951505402" aria-label="Телефон">
                <ViberIcon />
              </IconBox>
            </Icons>
            <PhoneBox>
              <Typography size="15" opacity={60}>
                Телефон:
              </Typography>
              <Link size="16-bold" href="tel:+74951505402">
                +7 495 150-54-02
              </Link>
            </PhoneBox>
          </ContactsTop>
          <AdressBox>
            <Typography size="15" opacity={60}>
              Адрес:
            </Typography>
            <Typography size="16-bold">
              Енотаевский район, Астраханская область
            </Typography>
          </AdressBox>
        </TopLeftBox>
        <TopRightBox>
          <ButtonBox>
            <StyledButton size="m">Забронировать номер</StyledButton>
          </ButtonBox>
        </TopRightBox>
      </TopBox>
      <MiddleBox>
        <MiddleLeftBox>
          <LogotypeBox>
            <StyledLogotype />
          </LogotypeBox>
          <Navigation>
            <NavigationBox>
              <Link size="15" href="/rooms">
                Номера
              </Link>
              <Link size="15" href="/boat-rental">
                Аренда лодок
              </Link>
              <Link size="15" href="/fishing">
                Рыбалка
              </Link>
              <Link size="15" href="/hunting">
                Охота
              </Link>
              <Link size="15" href="/romantic-getaway">
                Романтический отдых
              </Link>
            </NavigationBox>
            <NavigationBox>
              <Link size="15" href="/about">
                О нашей базе
              </Link>
              <Link size="15">Ресторан</Link>
              <Link size="15">Баня</Link>
              <Link size="15">SPA</Link>
              <Link size="15">Развлечения</Link>
            </NavigationBox>
          </Navigation>
        </MiddleLeftBox>
        <MiddleRightBox>
          <InfoBox>
            <EmailBox>
              <Typography size="15" opacity={60}>
                Почта для связи:
              </Typography>
              <Link size="16-bold" href="mailto:riverfish-hotel@yandex.ru">
                riverfish-hotel@yandex.ru
              </Link>
            </EmailBox>
            <WorkScheduleBox>
              <Typography size="15" opacity={60}>
                График работы:
              </Typography>
              <Typography size="16-bold">пн–вс | 10:00 – 20:00</Typography>
            </WorkScheduleBox>
          </InfoBox>
        </MiddleRightBox>
      </MiddleBox>
      <BottomBox>
        <BottomLeftBox>
          <Copyright>
            <Typography size="16-bold">©River & Fish Эко-отель</Typography>
          </Copyright>
          <Caution size="12" opacity={60}>
            Информация на сайте носит исключительно информационный характер и не
            является публичной офертой, определяемой положениями ст. 437
            Гражданского кодекса РФ.
          </Caution>
        </BottomLeftBox>
        <BottomRightBox>
          <IconBox
            href="https://vk.com/riverfishhotel"
            aria-label="Ссылка на vk"
          >
            <VkIcon />
          </IconBox>
          <IconBox
            href="https://www.instagram.com/riverfish.hotel?igsh=YzZvbjlsNXloMW9h"
            aria-label="Ссылка на instagram"
          >
            <SocIcon />
          </IconBox>
        </BottomRightBox>
      </BottomBox>
    </FooterBox>
  );
};
