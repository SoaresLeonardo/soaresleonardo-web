import styled from "styled-components";

export const Home = styled.div`
  max-width: 1224px;
  margin: 0px auto;
`;
export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;
export const HomeIntro = styled.div`
  text-align: start;
  width: 40%;
`;
export const Subtitle = styled.span`
  color: #6e57e0;
  font-size: 2rem;
`;
export const Title = styled.h1`
  font-size: 5rem;
`;
export const Description = styled.p``;
export const HomeImage = styled.div`
  width: 30%;
  img {
    width: 100%;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 50px;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const HomeActions = styled.div`
  margin-top: 30px;
`;
