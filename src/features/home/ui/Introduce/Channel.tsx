import { Card } from "@/shared/components/Card/Card";
import { Colors } from "@/shared/components/Color/Color.styled";
import { Container } from "@/shared/components/Container/Container.styled";
import { Image } from "@/shared/components/Image/Image.styled";

const Channels = [
  {
    name: "LinkedIn",
    src: "image/linkedIn.svg",
    shadow: "rgb(10, 101, 194, 0.5)",
  },
  {
    name: "Github",
    src: "image/github.svg",
    shadow: "rgb(255, 255, 255, 0.5)",
  },
  {
    name: "Velog",
    src: "image/velog.svg",
    shadow: "rgb(255, 255, 255, 0.5)",
  },
];

export function ChannelList() {
  return (
    <Container>
      {Channels.map((tech) => (
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
