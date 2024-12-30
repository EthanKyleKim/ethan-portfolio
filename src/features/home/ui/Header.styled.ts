import { Colors } from "@/shared/components/Color/Color.styled";
import styled from "styled-components";

export const Header = styled.header`
  height: 64px;
  background-color: ${Colors.backgroundColor};
  position: sticky;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
