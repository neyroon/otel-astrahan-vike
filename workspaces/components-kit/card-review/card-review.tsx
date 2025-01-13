import { StarIcon, Typography } from "@foundation";
import { FunctionalComponent } from "preact";
import {
  CardReviewBox,
  PhotoBlock,
  Review,
  ReviewBlock,
  StarBlock,
  StyledImage,
  TopTextBlock,
} from "./card-review.styles";

interface CardReviewProps {
  date: string;
  houseName: string;
  fullName: string;
  grade: number;
  firstImageLink: string;
  secondImageLink: string;
  thirdImageLink: string;
  review: string;
}

export const CardReview: FunctionalComponent<CardReviewProps> = ({
  date,
  houseName,
  fullName,
  grade,
  firstImageLink,
  secondImageLink,
  thirdImageLink,
  review,
}) => {
  return (
    <CardReviewBox>
      <TopTextBlock>
        <Typography size="15" opacity={60}>
          {date}
        </Typography>
        <Typography size="15" opacity={60}>
          {houseName}
        </Typography>
      </TopTextBlock>
      <ReviewBlock>
        <Typography size="28">{fullName}</Typography>
        <StarBlock>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </StarBlock>
      </ReviewBlock>
      <PhotoBlock>
        <StyledImage sources={[firstImageLink, firstImageLink]} />
        <StyledImage sources={[secondImageLink, secondImageLink]} />
        <StyledImage sources={[thirdImageLink, thirdImageLink]} />
      </PhotoBlock>
      <Review size="16" opacity={60}>
        {review}
      </Review>
    </CardReviewBox>
  );
};
