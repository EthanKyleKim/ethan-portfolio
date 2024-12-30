import { Card } from "@/shared/components/Card/Card";
import { Colors } from "@/shared/components/Color/Color.styled";
import { Container } from "@/shared/components/Container/Container.styled";
import { Image } from "@/shared/components/Image/Image.styled";

interface techStackProps {
  techStack: {
    name: string;
    src: string;
    shadow: string;
  }[];
}

export function TechStack({ techStack }: techStackProps) {
  return (
    <Container>
      {techStack.map((tech) => (
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
