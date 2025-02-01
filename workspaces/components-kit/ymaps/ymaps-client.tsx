import { PhoneIcon, PinIcon, TimeIcon } from "@foundation";
import {
  BottomBox,
  Description,
  IconBox,
  InfoBlock,
  InfoText,
  StyledButton,
  Title,
  TopBox,
  YmapsBox,
  YmapsCard,
} from "./ymaps.styles";

export default () => (
  <YmapsBox>
    <YmapsCard>
      <TopBox>
        <Title size="28">Астраханская область</Title>
        <Description size="16" opacity={60}>
          Приглашаем посетить наш эко-отель и лично оценить наш сервис и
          получить незабываемые впечатления
        </Description>
      </TopBox>
      <BottomBox>
        <InfoBlock>
          <IconBox>
            <PinIcon />
          </IconBox>
          <InfoText size="16">Енотаевский район, Астраханская область</InfoText>
        </InfoBlock>
        <InfoBlock>
          <IconBox>
            <PhoneIcon />
          </IconBox>
          <InfoText size="16">+7 920 895 30 30</InfoText>
        </InfoBlock>
        <InfoBlock>
          <IconBox>
            <TimeIcon />
          </IconBox>
          <InfoText size="16">пн-вс | 08:00 - 22:00</InfoText>
        </InfoBlock>
        <StyledButton>Забронировать номер</StyledButton>
      </BottomBox>
    </YmapsCard>
    <script
      type="text/javascript"
      charset="utf-8"
      async
      src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4e9090d97e6001fa1e4df818bf760866b738ce94cf43660eac5886c105d27d6d&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"
    ></script>
  </YmapsBox>
);
