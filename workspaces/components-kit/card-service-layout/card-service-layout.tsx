import { FunctionComponent, toChildArray } from "preact";
import {
  CardServiceFirstBlock,
  CardServiceFirstBlockTop,
  CardServiceLayoutBox,
  CardServiceSecondBlock,
} from "./card-service-layout.styles";

export const CardServiceLayout: FunctionComponent = ({ children }) => {
  const elements = toChildArray(children);

  return (
    <CardServiceLayoutBox>
      <CardServiceFirstBlock>
        <CardServiceFirstBlockTop>
          {elements[0]}
          {elements[1]}
        </CardServiceFirstBlockTop>
        {elements[2]}
      </CardServiceFirstBlock>
      <CardServiceSecondBlock>{elements[3]}</CardServiceSecondBlock>
    </CardServiceLayoutBox>
  );
};
