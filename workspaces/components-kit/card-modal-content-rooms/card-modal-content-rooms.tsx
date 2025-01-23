import { Typography } from "@foundation";
import { FunctionalComponent } from "preact";
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

interface CardModalContentRooms {
  title: string;
  description: string;
  price: string;
}

export const CardModalContentRooms: FunctionalComponent<
  CardModalContentRooms
> = ({ title, description, price }) => {
  return (
    <Box>
      <TopTextBox>
        <Typography size="28">{title}</Typography>
        <Typography size="16" opacity={70}>
          {description}
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
        <Typography size="20">{price}</Typography>
      </Price>
      <StyledButton size="s">Выбрать дату</StyledButton>
    </Box>
  );
};
