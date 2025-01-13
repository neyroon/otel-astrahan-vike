import { FunctionComponent } from "preact";
import {
  Description,
  Phone,
  StubBox,
  StyledLogotype,
  Subtitle,
  Title,
} from "./stub.styles";

interface StubProps {
  title: string;
  subtitle: string;
  phone: string;
  description: string;
}

export const Stub: FunctionComponent<StubProps> = ({
  title,
  subtitle,
  phone,
  description,
}) => {
  return (
    <StubBox>
      <StyledLogotype />
      <Title size="48" color="black">
        {title}
      </Title>
      <Subtitle size="32" color="black">
        {subtitle}
      </Subtitle>
      <Phone href="tel:+79208953030" size="64" color="black">
        {phone}
      </Phone>
      <Description size="32" color="black">
        {description}
      </Description>
    </StubBox>
  );
};
