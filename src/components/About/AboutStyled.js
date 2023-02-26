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
`;
export const AboutIntro = styled.div`
  text-align: start;
  width: 60%;
`;
export const AboutImage = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20rem;
    height: 20rem;
    border-radius: 25px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-left-radius: 0;
    border-top-right-radius: 50px;
  }
  @media (max-width: 760px) {
    width: 100%;
  }
  @media (max-width: 360px) {
    img {
      width: 13rem;
      height: 13rem;
    }
  }
`;
export const Title = styled.h1``;
export const Subtitle = styled.span`
  color: #6e57e0;
`;
export const Description = styled.p``;
