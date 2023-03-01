import {
  About,
  AboutContainer,
  AboutImage,
  AboutIntro,
  AboutSkillsContainer,
  Description,
  Skill,
  SkillCheck,
  SkillName,
  Subtitle,
  Title,
} from "./AboutStyled";

import { AiFillCheckCircle } from "react-icons/ai";
import { aboutInfo, skillsFrontEndInfo } from "../../Data";

export function AboutPage() {
  return (
    <About id="about">
      <AboutContainer>
        <AboutImage>
          <img src="/fotoabout.jpg" alt="About Image" />
        </AboutImage>
        <AboutIntro>
          <Subtitle>Sobre mim</Subtitle>
          <Title>Mas afinal, quem sou eu?</Title>

          {aboutInfo.map((item) => (
            <Description key={item}>{item}</Description>
          ))}

          <AboutSkillsContainer>
            {skillsFrontEndInfo.map((item) => (
              <Skill>
                <SkillCheck>
                  <AiFillCheckCircle />
                </SkillCheck>
                <SkillName>{item}</SkillName>
              </Skill>
            ))}
          </AboutSkillsContainer>
        </AboutIntro>
      </AboutContainer>
    </About>
  );
}
