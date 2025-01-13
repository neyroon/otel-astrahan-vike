import { FunctionComponent, toChildArray } from "preact";
import {
  CardAboutLayoutBox,
  StyledButton,
  WithButtonContainer,
} from "./card-about-layout.styles";

export const CardAboutLayout: FunctionComponent = ({ children }) => {
  const childrens = toChildArray(children);
  return (
    <CardAboutLayoutBox>
      {childrens[0]}
      {childrens[1]}

      <WithButtonContainer>
        {childrens[2]}
        <StyledButton>Забронировать номер</StyledButton>
      </WithButtonContainer>
    </CardAboutLayoutBox>
  );
};
