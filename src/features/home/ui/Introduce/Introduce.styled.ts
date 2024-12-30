import styled from "styled-components";

export const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const IntroduceWrapper = styled.div<{ flexDirection?: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;
