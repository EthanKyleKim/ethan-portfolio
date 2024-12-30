import { Card } from "@/shared/components/Card/Card";
import { Colors } from "@/shared/components/Color/Color.styled";
import { Container } from "@/shared/components/Container/Container.styled";
import Spacing from "@/shared/components/Spacing/Spacing";
import Typography from "@/shared/components/Typography/Typography";
import { TechStack } from "../Introduce/TechStack";

const workExperienceStack = [
  {
    company: "Peertec",
    date: "2023.03 ~ 2024.05",
    companyDesc:
      "거래소 및 국내 1위 종합 커스터디 서비스를 제공하는 디지털 자산 금융기술사",
    techStack: [
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
      {
        name: "Redux",
        src: "image/redux.svg",
        shadow: "rgba(118, 74, 188, 0.5)",
      },
      {
        name: "Stroybook",
        src: "image/storybook.svg",
        shadow: "rgb(245, 71, 133, 0.5)",
      },
    ],
  },
  {
    company: "IMPIX",
    date: "2019.02 ~ 2023.02",
    companyDesc:
      "제조기업 현장에서 데이터 수집, 분석하여 운영되는 스마트공장 구축기업",
    techStack: [
      {
        name: "JavaScript",
        src: "image/js.svg",
        shadow: "rgba(247, 223, 30, 0.5)",
      },
      {
        name: "React",
        src: "image/reactjs.svg",
        shadow: "rgba(97, 218, 251, 0.5)",
      },
    ],
  },
];

export default function WorkExperience() {
  return (
    <Container>
      <div style={{ padding: "16px 0px" }}>
        <Typography variant="h1">Work Experience.</Typography>
      </div>
      <Card
        width="624px"
        backgroundColor={Colors.backgroundColor}
        padding="32px 32px 0px 32px"
      >
        {workExperienceStack.map((experience) => {
          return (
            <div key={experience.company} style={{ display: "flex", gap: 32 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  width: "140px",
                  marginTop: "2px",
                }}
              >
                <Typography variant="body1">{experience.date}</Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  flexDirection: "column",
                  width: "450px",
                  height: "160px",
                }}
              >
                <Typography variant="h3">{experience.company}</Typography>
                <Spacing size="8px" />
                <Typography variant="caption3">
                  {experience.companyDesc}
                </Typography>
                <Spacing size="16px" />
                <TechStack techStack={experience.techStack} />
              </div>
            </div>
          );
        })}
      </Card>
    </Container>
  );
}
