import { Typography } from "@foundation";
import {
  Box,
  List,
  ListBlock,
  ListItem,
  MiddleText,
  SpanBold,
  StyledButton,
  TopTextBox,
} from "./card-modal-content-fish.styles";

const listItems = [
  "Скорость",
  "Вместимость",
  "Запас хода",
  "Объем бака",
  "Максимальная скорость",
  "Рыболовных удочек",
];

export const CardModalContentFish = () => {
  return (
    <Box>
      <TopTextBox>
        <Typography size="28">Катер-Турбо бабка</Typography>
      </TopTextBox>
      <ListBlock>
        <MiddleText size="16">Характеристики</MiddleText>
        <List>
          {listItems.map((text) => (
            <ListItem>
              <Typography size="16" opacity={70}>
                {text}
              </Typography>
            </ListItem>
          ))}
        </List>
      </ListBlock>
      <ListBlock>
        <MiddleText size="16">Стоимость аренды</MiddleText>
        <List>
          <ListItem>
            <Typography size="16" opacity={70}>
              Аренда на 1 час:
            </Typography>
            <SpanBold size="16-bold">5 000 ₽</SpanBold>
          </ListItem>
          <ListItem>
            <Typography size="16" opacity={70}>
              Аренда на 2 часа:
            </Typography>
            <SpanBold size="16-bold">9 000 ₽</SpanBold>
          </ListItem>
          <ListItem>
            <Typography size="16" opacity={70}>
              Цена на 1 сутки:
            </Typography>
            <SpanBold size="16-bold">18 000 ₽</SpanBold>
          </ListItem>
        </List>
      </ListBlock>

      <StyledButton size="s">Связаться с администратором</StyledButton>
    </Box>
  );
};
