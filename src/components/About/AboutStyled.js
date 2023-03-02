import styled from "styled-components";

export const About = styled.div`
  max-width: 1224px;
  margin: 80px auto;
`;
export const AboutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 20px;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;
export const AboutIntro = styled.div`
  text-align: start;
  width: 50%;
  @media (max-width: 760px) {
    width: 90%;
  }
`;
export const AboutImage = styled.div`
  width: 39%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-left-radius: 0;
    border-top-right-radius: 50px;
  }
  @media (max-width: 760px) {
    width: 100%;
    padding-bottom: 10px;
  }
`;
export const Title = styled.h1``;
export const Subtitle = styled.span`
  color: #6e57e0;
  font-weight: bold;
  text-decoration: underline solid #6e57e0 2px;
`;
export const Description = styled.p`
  padding-top: 8px;
  padding-bottom: 20px;
`;

export const AboutSkillsContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const AboutSkill = styled.div`
  width: 36%;
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 10px;
  gap: 1rem;
  border: 1px solid ${(props) => props.theme.background};

  @media (max-width: 670px) {
    width: 35%;
  }

  @media (max-width: 330px) {
    width: 100%;
  }
`;
export const AboutSkillIcon = styled.div`
  font-size: 1.5rem;
`;
export const AboutSkillName = styled.h3`
  color: #6e57e0;
`;
export const AboutSkillDescription = styled.p``;
