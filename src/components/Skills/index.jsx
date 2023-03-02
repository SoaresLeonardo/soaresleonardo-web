import { skillsBackendInfo, skillsFrontEndInfo } from "../../Data";
import {
  CardCheck,
  CardName,
  Description,
  SkillCard,
  Skills,
  SkillsContainer,
  SkillsInfo,
  SkillsIntro,
  SkillsListContainer,
  Subtitle,
  Title,
} from "./SkillsStyled";

import { AiFillCheckCircle } from "react-icons/ai";

export default function SkillsPage() {
  return (
    <Skills id="skills">
      <SkillsIntro>
        <Title>Minhas Skills</Title>
        <Subtitle></Subtitle>
        <Description></Description>
      </SkillsIntro>
      <SkillsContainer>
        <SkillsInfo>
          <Title>Frontend developer</Title>
          <SkillsListContainer>
            {skillsFrontEndInfo.map((item) => (
              <SkillCard>
                <CardCheck>
                  <AiFillCheckCircle />
                </CardCheck>
                <CardName>{item}</CardName>
              </SkillCard>
            ))}
          </SkillsListContainer>
        </SkillsInfo>
        <SkillsInfo>
          <Title>Backend developer</Title>
          <SkillsListContainer>
            {skillsBackendInfo.map((item) => (
              <SkillCard>
                <CardCheck>
                  <AiFillCheckCircle />
                </CardCheck>
                <CardName>{item}</CardName>
              </SkillCard>
            ))}
          </SkillsListContainer>
        </SkillsInfo>
      </SkillsContainer>
    </Skills>
  );
}
