import { myProjects } from "../../Data";
import { ButtonElement } from "../ButtonElement";
import {
  Card,
  CardActions,
  CardDescription,
  CardImage,
  CardName,
  Description,
  Projects,
  ProjectsCard,
  ProjectsContainer,
  ProjectsIntro,
  Title,
} from "./ProjectsStyled";

import { AiFillGithub } from "react-icons/ai";
import { RiTestTubeFill } from "react-icons/ri";

export default function ProjectsPage() {
  return (
    <Projects id="projects">
      <ProjectsContainer>
        <ProjectsIntro>
          <Title>Meus projetos</Title>
          <Description>Veja meus projetos recentes!</Description>
        </ProjectsIntro>
        <ProjectsCard>
          {myProjects.map((item) => (
            <Card key={item.id}>
              <CardImage>
                <img src={item.img} alt="Card Image" />
              </CardImage>
              <CardName>{item.name}</CardName>
              <CardDescription>{item.description}</CardDescription>
              <CardActions>
                <ButtonElement href={item.hrefDemo} target="_blank">
                  <AiFillGithub />
                  Demo
                </ButtonElement>
                <ButtonElement href={item.hrefCode} target="_blank">
                  <RiTestTubeFill />
                  Code
                </ButtonElement>
              </CardActions>
            </Card>
          ))}
        </ProjectsCard>
      </ProjectsContainer>
    </Projects>
  );
}
