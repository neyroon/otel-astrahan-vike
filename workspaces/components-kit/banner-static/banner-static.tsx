import { Gradient, Typography } from "@foundation";
import { FunctionComponent } from "preact";
import {
  BannerStaticBox,
  Content,
  StyledButton,
  StyledImage,
  TextBox,
} from "./banner-static.styles";

interface BannerStaticProps {
  title: string;
  description: string;
  imageLink1x: string;
  imageLink2x: string;
  variant?: "m" | "s";
}

export const BannerStatic: FunctionComponent<BannerStaticProps> = ({
  imageLink1x,
  imageLink2x,
  title,
  description,
}) => {
  return (
    <BannerStaticBox>
      <StyledImage sources={[imageLink1x]} />
      <Gradient />
      <Content>
        <TextBox>
          <Typography size="48" color="white">
            {title}
          </Typography>
          <Typography size="18" color="white" opacity={70}>
            {description}
          </Typography>
        </TextBox>
        <StyledButton>Забронировать номер</StyledButton>
      </Content>
    </BannerStaticBox>
  );
};
