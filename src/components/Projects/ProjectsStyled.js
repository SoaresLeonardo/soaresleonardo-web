import styled from "styled-components";

export const Projects = styled.div`
  max-width: 1224px;
  margin: 150px auto;
`;
export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
`;
export const ProjectsIntro = styled.div`
  text-align: center;
`;
export const Title = styled.h1``;
export const Description = styled.p``;
export const ProjectsCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  margin-left: 20px;
  background-color: ${(props) => props.theme.background};
  border-radius: 10px;

  a {
    width: 70px;
    padding: 10px;
    margin-left: 20px;
  }

  a:first-child {
    margin-left: 0;
  }

  &:first-child {
    margin-left: 0;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 20px;
    width: 80%;
  }
`;
export const CardImage = styled.div`
  img {
    width: 100%;
  }
`;
export const CardName = styled.h2`
  color: #6e57e0;
`;
export const CardDescription = styled.p`
  padding-top: 8px;
  padding-bottom: 20px;
`;
export const CardActions = styled.div`
  display: flex;
`;
