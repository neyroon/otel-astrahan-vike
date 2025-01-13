import { styled } from "@linaria/react";

export const Picture = styled.picture`
  height: inherit;
`;

export const Source = styled.source`
  &&& {
    margin: 0;
    padding: 0;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
