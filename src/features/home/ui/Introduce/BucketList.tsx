import { Card } from "@/shared/components/Card/Card";
import { Colors } from "@/shared/components/Color/Color.styled";
import { Container } from "@/shared/components/Container/Container.styled";
import { Image } from "@/shared/components/Image/Image.styled";
import Typography from "@/shared/components/Typography/Typography";

const bucketList = [
  {
    name: "Toyota GR Supra",
    src: "image/grsupra.webp",
    shadow: "rgb(255, 0, 0, 0.5)",
  },
  {
    name: "아파트 장만",
    src: "image/apt.webp",
    shadow: "rgb(255, 255, 255, 0.5)",
  },
  {
    name: "CTO",
    src: "image/cto.webp",
    shadow: "rgb(255, 255, 255, 0.5)",
  },
  {
    name: "결혼",
    src: "image/marry.webp",
    shadow: "rgb(255, 255, 255, 0.5)",
  },
];

export function BucketList() {
  return (
    <Container>
      {bucketList.map((dream) => (
        <Card
          key={dream.name}
          width="160px"
          height="160px"
          hoverShadowColor={dream.shadow}
        >
          <Image src={dream.src} alt={dream.name} width="100%" height="100%" />
          <Typography variant="body1" color={Colors.gray300}>
            {dream.name}
          </Typography>
        </Card>
      ))}
    </Container>
  );
}
