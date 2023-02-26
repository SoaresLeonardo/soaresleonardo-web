import {
  About,
  AboutContainer,
  AboutImage,
  AboutIntro,
  Description,
  Subtitle,
  Title,
} from "./AboutStyled";

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
        </AboutIntro>
      </AboutContainer>
    </About>
  );
}
