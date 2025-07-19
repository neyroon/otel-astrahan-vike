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
  "Лодки оборудованы креплениями для удочек ",
  "В каждой лодке есть крыша от солнца",
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
        <MiddleText size="16">Стоимость аренды </MiddleText>
        <List>
          <ListItem>
            <Typography size="16" opacity={70}>
              Световой день (8 часов) + бензин:
            </Typography>
            <SpanBold size="16-bold">10 000 ₽</SpanBold>
          </ListItem>
          <ListItem>
            <Typography size="16" opacity={70}>
              Стоимость бензина оплачивается в конце дня отдельно
            </Typography>
          </ListItem>
        </List>
      </ListBlock>

      <StyledButton size="s" href="tel:+79208953030">
        Связаться с администратором
      </StyledButton>
    </Box>
  );
};
