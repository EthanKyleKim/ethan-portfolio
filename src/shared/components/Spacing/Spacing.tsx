import { SpacingProps, SpacingWrapper } from "./Spacing.styled";

const Spacing: React.FC<SpacingProps> = ({ size, direction = "vertical" }) => {
  return <SpacingWrapper size={size} direction={direction} />;
};

export default Spacing;
