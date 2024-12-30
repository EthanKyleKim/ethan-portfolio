import { Card } from "@/shared/components/Card/Card";
import { Colors } from "@/shared/components/Color/Color.styled";
import { Container } from "@/shared/components/Container/Container.styled";
import { Image } from "@/shared/components/Image/Image.styled";

const subTechStack = [
  {
    name: "Next.js",
    src: "image/nextjs2.svg",
    shadow: "rgb(0, 0, 0, 0.5)",
  },
  {
    name: "React Query",
    src: "image/reactquery.svg",
    shadow: "rgba(255, 65, 84, 0.5)",
  },
  {
    name: "Stroybook",
    src: "image/storybook.svg",
    shadow: "rgb(245, 71, 133, 0.5)",
  },
  {
    name: "Three.js",
    src: "image/threejs.svg",
    shadow: "rgb(0, 0, 0, 0.5)",
  },
];

export function SubTechStack() {
  return (
    <Container>
      {subTechStack.map((tech) => (
        <Card
          key={tech.name}
          width="32px"
          height="32px"
          hoverShadowColor={tech.shadow}
          backgroundColor={Colors.secondary}
        >
          <Image src={tech.src} alt={tech.name} width="24px" height="24px" />
        </Card>
      ))}
    </Container>
  );
}
