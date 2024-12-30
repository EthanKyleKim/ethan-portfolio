import styled from "styled-components";

interface WrapperProps {
  display?: "flex" | "block" | "inline-block";
  alignItems?: "start" | "center" | "end" | "stretch" | "baseline";
  justifyContent?: "start" | "center" | "end" | "stretch" | "baseline";
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: string;
  width?: string;
  height?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: ${({ display }) => display || "block"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  justify-content: ${({ justifyContent }) => justifyContent || "stretch"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  gap: ${({ gap }) => (gap !== undefined ? `${gap}` : "0px")};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
`;
