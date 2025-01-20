import {
  CardServiceBox,
  CardServiceText,
  GradientBox,
  StyledImage,
  Subtitle,
  Title,
} from "./card-service.styles";

export const CardService = ({
  title,
  subtitle,
  imageLink1x,
  imageLink2x,
}: {
  title: string;
  subtitle: string;
  imageLink1x: string;
  imageLink2x: string;
}) => {
  return (
    <CardServiceBox>
      <StyledImage sources={[imageLink1x, imageLink2x]} />
      <GradientBox />
      <CardServiceText>
        <Title color="white" size="28">
          {title}
        </Title>
        <Subtitle color="white" size="16">
          {subtitle}
        </Subtitle>
      </CardServiceText>
    </CardServiceBox>
  );
};
