import styled from "styled-components";

export const Home = styled.div`
  max-width: 1224px;
  margin: 50px auto;
`;

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;

  @media (max-width: 928px) {
    flex-direction: column-reverse;
  }
`;

export const HomeIntro = styled.div`
  text-align: start;
  width: 40%;

  h1,
  span {
    font-size: 5rem;
    @media (max-width: 468px) {
      font-size: 4rem;
    }
    @media (max-width: 364px) {
      font-size: 3.5rem;
    }
    @media (max-width: 336px) {
      font-size: 3rem;
    }

    @media (max-width: 280px) {
      font-size: 2.4rem;
    }
  }
  @media (max-width: 920px) {
    width: 80%;
  }

  @media (max-width: 490px) {
    width: 90%;
  }

  span {
    font-weight: bold;
    color: #6e57e0;
  }
`;

export const Subtitle = styled.span``;
export const Title = styled.h1``;
export const Description = styled.p`
  font-size: 1.2rem;
`;
export const HomeImage = styled.div`
  width: 35%;
  img {
    width: 100%;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-left-radius: 50px;
    border-top-right-radius: 0;
  }

  @media (max-width: 928px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    img {
      display: none;
    }
  }
`;

export const HomeActions = styled.div`
  margin-top: 30px;
  display: flex;
  a {
    margin-left: 20px;
  }

  a:nth-child(1) {
    margin-left: 0;
  }

  a:nth-child(2) {
    background-color: inherit;
    color: #6e57e0;
    font-weight: bold;

    @media (max-width: 760px) {
      border: 2px solid #6e57e0;
    }
  }

  @media (max-width: 490px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a {
      width: 100%;
      margin-left: 0;
      margin-bottom: 20px;
    }
  }
`;
