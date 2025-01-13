import { styled } from "@linaria/react";
import { breakpoints } from "@tokens";

export const GradientBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 28px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 40.78%,
        rgba(0, 0, 0, 0.6) 78.61%
      ),
      linear-gradient(
        124.78deg,
        rgba(10, 5, 36, 0) 43.66%,
        rgba(10, 5, 36, 0.24) 90.82%
      ),
      linear-gradient(
        180deg,
        rgba(10, 5, 36, 0.32) 9.81%,
        rgba(10, 5, 36, 0) 21.69%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.64) 0%, rgba(0, 0, 0, 0) 30.7%),
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 39.94%,
        rgba(0, 0, 0, 0.48) 74.47%
      );
  }
`;
