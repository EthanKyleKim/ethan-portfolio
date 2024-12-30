import Typography from "@/shared/components/Typography/Typography";
import { Card } from "@/shared/components/Card/Card";
import { Image } from "@/shared/components/Image/Image.styled";
import { TechStack } from "./TechStack";
import { SubTechStack } from "./SubTechStack";
import { IntroduceContainer, IntroduceWrapper } from "./Introduce.styled";
import Spacing from "@/shared/components/Spacing/Spacing";
import { ChannelList } from "./Channel";

const techStack = [
  {
    name: "JavaScript",
    src: "image/js.svg",
    shadow: "rgba(247, 223, 30, 0.5)",
  },
  {
    name: "TypeScript",
    src: "image/ts.svg",
    shadow: "rgba(49, 120, 198, 0.5)",
  },
  {
    name: "React",
    src: "image/reactjs.svg",
    shadow: "rgba(97, 218, 251, 0.5)",
  },
  {
    name: "Styled-components",
    src: "image/styled-components.svg",
    shadow: "rgba(219, 112, 147, 0.5)",
  },
  { name: "Redux", src: "image/redux.svg", shadow: "rgba(118, 74, 188, 0.5)" },
];

export function Introduce() {
  return (
    <IntroduceContainer>
      <div style={{ padding: "16px 0px" }}>
        <Typography variant="h1">Introduce.</Typography>
      </div>
      <IntroduceWrapper>
        <Card width="240px" height="240px" padding="0">
          <Image src="image/me.png" alt="me" />
        </Card>

        <Card width="400px" height="208px" padding="16px">
          <Typography variant="h3">프론트엔드 개발자 김주현</Typography>
          <Spacing size="16px" direction="vertical" />
          <Typography variant="body2">
            일에 몰입하여 주도적으로 팀원들과 소통하고 협업하는
            <br />
            과정을 통해 문제를 해결하고, 더 나은 개발 환경(DX)을
            <br />
            만들어가는 데 중점을 두고 있습니다.
          </Typography>
          <Spacing size="32px" />
          <Typography variant="caption3">저에 대해 더 궁금하신가요?</Typography>
        </Card>
      </IntroduceWrapper>

      <IntroduceWrapper flexDirection="row">
        <IntroduceWrapper flexDirection="column">
          <Card width="208px" height="208px" padding="16px">
            <Typography variant="body1">Phone.</Typography>
            <Spacing size="8px" direction="vertical" />
            <Typography variant="caption3">010-5655-0407</Typography>
            <Spacing size="8px" direction="vertical" />
            <Typography variant="body1">Email.</Typography>
            <Spacing size="8px" direction="vertical" />
            <Typography variant="caption3">rlawngus000407@naver.com</Typography>
            <Spacing size="16px" direction="vertical" />
            <ChannelList />
          </Card>
        </IntroduceWrapper>

        <Card width="400px" height="208px" padding="16px">
          <Typography variant="body1">I Can Do This All Day</Typography>
          <Spacing size="16px" direction="vertical" />
          <TechStack techStack={techStack} />
          <Spacing size="16px" direction="vertical" />
          <Typography variant="body1">
            잘 하진 못하지만 사용해봤습니다.
          </Typography>
          <Spacing size="16px" direction="vertical" />
          <SubTechStack />
        </Card>
      </IntroduceWrapper>
    </IntroduceContainer>
  );
}
