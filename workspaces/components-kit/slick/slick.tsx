import { FunctionalComponent } from "preact";
import Slider from "react-slick";
import { SlickBox } from "./slick.styles";

export const Slick: FunctionalComponent = (props) => {
  return (
    <SlickBox>
      <Slider {...props} />
    </SlickBox>
  );
};
