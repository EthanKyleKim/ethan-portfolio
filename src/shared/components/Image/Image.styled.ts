import styled from "styled-components";

export const Image = styled.img<{ width?: string; height?: string }>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '100%')};
  object-fit: cover;
`;
