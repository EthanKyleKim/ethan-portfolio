import styled from "styled-components";

export interface SpacingProps {
  size: string; // 간격 크기 (px)
  direction?: "horizontal" | "vertical"; // 방향
}

export const SpacingWrapper = styled.div<SpacingProps>`
  width: ${({ direction, size }) =>
    direction === "horizontal" ? `${size}` : "1px"};
  height: ${({ direction, size }) =>
    direction === "vertical" ? `${size}` : "1px"};
  display: ${({ direction }) =>
    direction === "horizontal" ? "inline-block" : "block"};
`;
