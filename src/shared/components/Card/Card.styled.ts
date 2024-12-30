import styled from "styled-components";
import { Colors } from "../Color/Color.styled";

export const CardContainer = styled.div<{
  width?: string;
  height?: string;
  hoverEffect?: boolean;
  hoverShadowColor?: string;
  backgroundColor?: string;
  padding?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  border-radius: 16px;
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : Colors.backgroundColor};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden; /* border-radius 밖의 이미지가 보이지 않도록 설정 */
  padding: ${({ padding }) => (padding ? padding : "8px")};

  ${(props) =>
    props.hoverEffect &&
    `
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0px 8px 16px ${
        props.hoverShadowColor || "rgba(0, 0, 0, 0.15)"
      };
    }
  `};
`;
