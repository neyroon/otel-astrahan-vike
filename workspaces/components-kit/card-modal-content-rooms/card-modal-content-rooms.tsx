import { Typography } from "@foundation";
import {
  Box,
  List,
  ListBlock,
  ListItem,
  MiddleText,
  Price,
  StyledButton,
  TopTextBox,
} from "./card-modal-content-rooms.styles";

const listItems = [
  "Бесплатный wi-fi",
  "Телевизор",
  "Санузел с душем",
  "Система с обогревом",
  "Постельное белье, полотенца",
  "Мангал на улице",
  "Кухня: плита, холодильник, свч, набор посуды",
  "Можно с домашними животными",
];

export const CardModalContentRooms = () => {
  return (
    <Box>
      <TopTextBox>
        <Typography size="28">Юрта-Люкс 1</Typography>
        <Typography size="16" opacity={70}>
          Дом площадью 43 м² расположен на первой линии. Панорамное остекление
          и веранда, откуда открывается отличный вид на реку. В доме удобная
          гостиная совмещенная с кухней и одна спальня. Подходит для 4х гостей.
        </Typography>
      </TopTextBox>
      <ListBlock>
        <MiddleText size="16">Удобства номера</MiddleText>
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
      <Price>
        <Typography size="20">Цена за 1 сутки: </Typography>
        <Typography size="20">15000</Typography>
      </Price>
      <StyledButton size="s">Выбрать дату</StyledButton>
    </Box>
  );
};
