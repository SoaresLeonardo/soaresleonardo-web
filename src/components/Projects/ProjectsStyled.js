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
  margin-top: 40px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  margin-left: 20px;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.background};
  padding-bottom: 20px;
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
    width: 90%;
  }
`;
export const CardImage = styled.div`
  background-color: ${(props) => props.theme.background};
  border-radius: 20px;
  padding-bottom: 10px;
  img {
    width: 100%;
  }
`;
export const CardName = styled.h2`
  color: #6e57e0;
`;
export const CardDescription = styled.p`
  padding: 10px;
`;
export const CardActions = styled.div`
  display: flex;
`;
