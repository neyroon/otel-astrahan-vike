import {
  InstagramIcon,
  Link,
  PhoneIcon,
  RutubeIcon,
  Typography,
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
  IconBoxTop,
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
                <Typography size="16-bold">пн–вс | 08:00 – 22:00</Typography>
              </WorkScheduleBox>
            </InfoBox>
          </InfoBoxMobile>
          <ContactsTop>
            <Icons>
              <IconBoxTop href="tel:+74951505402" aria-label="Телефон">
                <PhoneIcon />
              </IconBoxTop>
            </Icons>
            <PhoneBox>
              <Typography size="15" opacity={60}>
                Телефон:
              </Typography>
              <Link size="16-bold" href="tel:+79208953030">
                +7 920 895 30 30
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
              <Link size="15" href="/about">
                О нашей базе
              </Link>
            </NavigationBox>
            {/* <NavigationBox>
              
              <Link size="15">Ресторан</Link>
              <Link size="15">Баня</Link>
              <Link size="15">SPA</Link>
              <Link size="15">Развлечения</Link>
            </NavigationBox> */}
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
              <Typography size="16-bold">пн–вс | 08:00 – 22:00</Typography>
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
            href="https://rutube.ru/channel/50338961/"
            aria-label="Ссылка на rutube"
          >
            <RutubeIcon />
          </IconBox>
        </BottomRightBox>
      </BottomBox>
    </FooterBox>
  );
};
