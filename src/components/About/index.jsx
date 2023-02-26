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

import { AiOutlineCheck } from "react-icons/ai";

export function AboutPage() {
  return (
    <About id="about">
      <AboutContainer>
        <AboutImage>
          <img src="../../../public/fotoabout.jpeg" alt="About Image" />
        </AboutImage>
        <AboutIntro>
          <Title>Sobre mim</Title>
          <Subtitle>Desenvolvedor front-end</Subtitle>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            laudantium. Quibusdam magni accusantium consequuntur, dolores vel
            sint ex harum voluptatibus! Veritatis sapiente ab perspiciatis fuga
            ea labore dolores accusamus rerum?
          </Description>
          <AboutSkillsContainer>
            <Skill>
              <SkillCheck>
                <AiOutlineCheck />
              </SkillCheck>
              <SkillName>HTMl5</SkillName>
            </Skill>
            <Skill>
              <SkillCheck>
                <AiOutlineCheck />
              </SkillCheck>
              <SkillName>CSS3</SkillName>
            </Skill>
            <Skill>
              <SkillCheck>
                <AiOutlineCheck />
              </SkillCheck>
              <SkillName>JavaScript</SkillName>
            </Skill>
            <Skill>
              <SkillCheck>
                <AiOutlineCheck />
              </SkillCheck>
              <SkillName>ReactJS</SkillName>
            </Skill>
            <Skill>
              <SkillCheck>
                <AiOutlineCheck />
              </SkillCheck>
              <SkillName>NodeJS</SkillName>
            </Skill>
          </AboutSkillsContainer>
        </AboutIntro>
      </AboutContainer>
    </About>
  );
}
