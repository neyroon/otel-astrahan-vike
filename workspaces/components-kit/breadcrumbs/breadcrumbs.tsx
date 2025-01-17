import { Typography } from "@foundation";
import { FunctionComponent } from "preact";
import {
  Background,
  Breadcrumb,
  BreadcrumbsBox,
  CurrentPageText,
  GradientBox,
  MainLink,
  MainText,
  TextBox,
} from "./breadcrumbs.styles";
export const Breadcrumbs: FunctionComponent<{
  imageLink1x: string;
  imageLink2x: string;
  currentPageText: string;
}> = ({ imageLink1x, imageLink2x, currentPageText }) => {
  return (
    <BreadcrumbsBox>
      <Background sources={[imageLink1x]} />
      <GradientBox />
      <TextBox>
        <Breadcrumb>
          <MainLink size="15" color="white" href="/">
            Главная
          </MainLink>
          <Typography size="15" color="white">
            /
          </Typography>
          <CurrentPageText size="15" color="white">
            {currentPageText}
          </CurrentPageText>
        </Breadcrumb>
        <MainText size="48" color="white">
          {currentPageText}
        </MainText>
      </TextBox>
    </BreadcrumbsBox>
  );
};
