import styled from "styled-components";

export const About = styled.div`
  max-width: 1224px;
  margin: 150px auto;
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
  width: 40%;
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
  }
`;
export const Title = styled.h1``;
export const Subtitle = styled.span`
  color: #6e57e0;
  font-weight: bold;
`;
export const Description = styled.p`
  padding-top: 8px;
  padding-bottom: 8px;
`;
export const AboutSkillsContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Skill = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const SkillName = styled.span``;
export const SkillCheck = styled.span`
  border: 1px solid #aca9b9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  font-size: 1.5rem;
  height: 45px;
  border-radius: 3px;
`;
