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
  "Пассажировместимость: 5 чел",
  "Длина: 4,96 м",
  "Ширина: 1,94 м",
  "Вес: 350 кг",
  "Грузоподъемность: 485кг",
  "Мощность двигателя макс: 60 л.с.",
];

export const CardModalContentFish = () => {
  return (
    <Box>
      <TopTextBox>
        <Typography size="28">Волжанка 46 Fish</Typography>
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
