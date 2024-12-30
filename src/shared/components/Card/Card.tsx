import React from "react";
import { CardContainer } from "./Card.styled";

interface CardProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  hoverEffect?: boolean;
  hoverShadowColor?: string;
  backgroundColor?: string;
  padding?: string;
}

export function Card({
  children,
  width,
  height,
  hoverEffect = true,
  hoverShadowColor,
  backgroundColor,
  padding,
}: CardProps) {
  return (
    <CardContainer
      width={width}
      height={height}
      hoverEffect={hoverEffect}
      hoverShadowColor={hoverShadowColor}
      backgroundColor={backgroundColor}
      padding={padding}
    >
      {children}
    </CardContainer>
  );
}
