import {
  About,
  AboutContainer,
  AboutSkillsContainer,
  AboutImage,
  AboutIntro,
  Subtitle,
  Title,
  AboutSkill,
  AboutSkillIcon,
  AboutSkillName,
  AboutSkillDescription,
  Description,
} from "./AboutStyled";

import { aboutInfo, aboutSkills } from "../../Data";

export function AboutPage() {
  return (
    <About id="about">
      <AboutContainer>
        <AboutImage>
          <img src="/fotoabout.jpg" alt="About Image" />
        </AboutImage>
        <AboutIntro>
          <Subtitle>Introdução</Subtitle>
          <Title>Quem eu sou?</Title>

          {aboutInfo.map((item) => (
            <Description key={item}>{item}</Description>
          ))}
          <AboutSkillsContainer>
            {aboutSkills.map((item) => (
              <AboutSkill>
                <AboutSkillIcon>{<item.icon />}</AboutSkillIcon>
                <AboutSkillName>{item.name}</AboutSkillName>
                <AboutSkillDescription>
                  {item.description}
                </AboutSkillDescription>
              </AboutSkill>
            ))}
          </AboutSkillsContainer>
        </AboutIntro>
      </AboutContainer>
    </About>
  );
}

{
  /* <AboutSkillsContainer>
              {skillsFrontEndInfo.map((item) => (
                <Skill>
                  <SkillCheck>
                    <AiFillCheckCircle />
                  </SkillCheck>
                  <SkillName>{item}</SkillName>
                </Skill>
              ))}
            </AboutSkillsContainer> */
}
