import { styled } from "styled-components";
import { Colors } from "../Color/Color.styled";

const typography = {
  h1: {
    fontSize: "48px", // or '3rem'
    fontWeight: 900, // Heavy
  },
  h2: {
    fontSize: "40px", // or '2.5rem'
    fontWeight: 700, // Bold
  },
  h3: {
    fontSize: "32px", // or '2.25rem'
    fontWeight: 700, // Bold
  },
  h4: {
    fontSize: "24px", // or '1.5rem'
    fontWeight: 500, // Medium
  },
  h5: {
    fontSize: "20px", // or '1.25rem'
    fontWeight: 500, // Medium
  },
  body1: {
    fontSize: "16px", // or '1rem'
    fontWeight: 500, // Medium
  },
  body2: {
    fontSize: "14px", // or '0.875rem'
    fontWeight: 400, // Normal
  },
  caption1: {
    fontSize: "16px", // or '1rem'
    fontWeight: 400, // Normal
  },
  caption2: {
    fontSize: "14px", // or '0.875rem'
    fontWeight: 400, // Normal
  },
  caption3: {
    fontSize: "12px", // or '0.75rem'
    fontWeight: 400, // Normal
  },
};

export const H1 = styled.h1`
  font-size: ${typography.h1.fontSize};
  font-weight: ${typography.h1.fontWeight};
  color: ${({ color }) => (color ? color : Colors.gray200)};
  white-space: pre-line;
  text-align: center;
  margin: 0px;
`;

export const H2 = styled.h2`
  font-size: ${typography.h2.fontSize};
  font-weight: ${typography.h2.fontWeight};
  color: ${({ color }) => (color ? color : Colors.gray200)};
  white-space: pre-line;
  text-align: center;
  margin: 0px;
`;

export const H3 = styled.h3`
  font-size: ${typography.h3.fontSize};
  font-weight: ${typography.h3.fontWeight};
  color: ${({ color }) => (color ? color : Colors.gray200)};
  white-space: pre-line;
  text-align: center;
  margin: 0px;
`;

export const H4 = styled.h4`
  font-size: ${typography.h4.fontSize};
  font-weight: ${typography.h4.fontWeight};
  color: ${({ color }) => (color ? color : Colors.gray200)};
  white-space: pre-line;
  text-align: center;
  margin: 0px;
`;

export const H5 = styled.h5`
  font-size: ${typography.h5.fontSize};
  font-weight: ${typography.h5.fontWeight};
  color: ${({ color }) => (color ? color : Colors.gray200)};
  white-space: pre-line;
  text-align: center;
  margin: 0px;
`;

export const Body1 = styled.p`
  font-size: ${typography.body1.fontSize};
  font-weight: ${typography.body1.fontWeight};
  line-height: 1.5;
  color: ${({ color }) => (color ? color : Colors.gray300)};
  white-space: pre-line;
  text-align: center;
  margin: 0px;
`;

export const Body2 = styled.p`
  font-size: ${typography.body2.fontSize};
  font-weight: ${typography.body2.fontWeight};
  line-height: 1.5;
  color: ${({ color }) => (color ? color : Colors.gray300)};
  white-space: pre-line;
  text-align: center;
  margin: 0px;
`;

export const Caption1 = styled.span`
  font-size: ${typography.caption1.fontSize};
  font-weight: ${typography.caption1.fontWeight};
  color: ${({ color }) => (color ? color : Colors.gray400)};
  white-space: pre-line;
  text-align: center;
  margin: 0px;
`;

export const Caption2 = styled.span`
  font-size: ${typography.caption2.fontSize};
  font-weight: ${typography.caption2.fontWeight};
  color: ${({ color }) => (color ? color : Colors.gray400)};
  white-space: pre-line;
  text-align: center;
  margin: 0px;
`;

export const Caption3 = styled.span`
  font-size: ${typography.caption3.fontSize};
  font-weight: ${typography.caption3.fontWeight};
  color: ${({ color }) => (color ? color : Colors.gray400)};
  white-space: pre-line;
  text-align: center;
  margin: 0px;
`;
