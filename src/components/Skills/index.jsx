import { skillsBackendInfo, skillsFrontEndInfo } from "../../Data";
import {
  CardCheck,
  CardName,
  SkillCard,
  Skills,
  SkillsContainer,
  SkillsInfo,
  SkillsIntro,
  SkillsListContainer,
  Title,
} from "./SkillsStyled";

import { AiFillCheckCircle } from "react-icons/ai";

export default function SkillsPage() {
  return (
    <Skills>
      <SkillsIntro>
        <Title>Minhas Skills</Title>
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
