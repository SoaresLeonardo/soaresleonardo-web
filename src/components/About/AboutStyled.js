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
export const Title = styled.h1`
  font-size: 2.4rem;
`;
export const Subtitle = styled.span`
  color: #6e57e0;
  font-weight: bold;
  text-decoration: underline;
`;
export const Description = styled.p`
  padding-top: 8px;
  padding-bottom: 8px;
`;
export const AboutSkillsContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 2px solid ${(props) => props.theme.background};
  gap: 2.6rem;
  border-radius: 10px;
  padding: 20px;
`;

export const Skill = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  border-radius: 5px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const SkillName = styled.span`
  color: ${(props) => props.theme.color};
`;
export const SkillCheck = styled.div`
  font-size: 2rem;
  color: #6e57e0;
`;
