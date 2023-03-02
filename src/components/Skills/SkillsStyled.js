import styled from "styled-components";

export const Skills = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 50px;
  background-color: #6e57e0;

  @media (max-width: 760px) {
    padding: 20px;
  }
`;
export const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;

  @media (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const SkillsIntro = styled.div`
  color: white;
  font-size: 1.3rem;
`;
export const Title = styled.h1`
  text-align: center;
`;
export const Subtitle = styled.h1``;
export const Description = styled.p``;
export const SkillsInfo = styled.div`
  /* box-shadow: 10px 10px 0 #6e57e0; */
  background-color: ${(props) => props.theme.body};
  padding: 30px;
  width: 40%;
  border-radius: 10px;
  margin: 2rem 0;
  h1 {
    font-size: 1.5rem;
  }

  @media (max-width: 760px) {
    width: 80%;
  }
`;

export const SkillsListContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const SkillCard = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  @media (max-width: 760px) {
    width: 100%;
  }
`;
export const CardName = styled.span``;
export const CardCheck = styled.div`
  color: #6e57e0;
  font-size: 2rem;
`;