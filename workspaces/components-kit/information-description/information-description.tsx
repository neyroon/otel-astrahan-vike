import { Typography } from "@foundation";
import { FunctionComponent } from "preact";
import { InformationDescriptionBox } from "./information-description.styles";

interface InformationDescription {
  description1: string;
  description2: string;
  description3?: string;
}

export const InformationDescription: FunctionComponent<
  InformationDescription
> = ({ description1, description2, description3 }) => {
  return (
    <InformationDescriptionBox>
      <Typography size="16" opacity={70}>
        {description1}
      </Typography>
      <Typography size="16" opacity={70}>
        {description2}
      </Typography>
      {description3 && (
        <Typography size="16" opacity={70}>
          {description3}
        </Typography>
      )}
    </InformationDescriptionBox>
  );
};
