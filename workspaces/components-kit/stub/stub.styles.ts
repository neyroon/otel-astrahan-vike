import { Link, Logotype, Typography } from "@foundation";
import { styled } from "@linaria/react";

export const StubBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1043px;
  text-align: center;
  min-height: calc(100vh - 56px);
`;

export const StyledLogotype = styled(Logotype)`
  width: 316px;
  height: 128px;
`;

export const Title = styled(Typography)`
  margin-top: 151px;
`;

export const Subtitle = styled(Typography)`
  margin-top: 32px;
  opacity: 60%;
`;

export const Phone = styled(Link)`
  margin-top: 80px;
`;

export const Description = styled(Typography)`
  margin-top: 80px;
  max-width: 681px;
  opacity: 60%;
`;
