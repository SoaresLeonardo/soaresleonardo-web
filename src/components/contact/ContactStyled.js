import styled from "styled-components";

export const Contact = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 5rem 0;
  background-image: url("/skillsImage.svg");
  background-size: cover;
  background-position: center center;
`;
export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;

  @media (max-width: 760px) {
    flex-direction: column-reverse;
  }
`;
export const ContactIntro = styled.div`
  text-align: start;
  width: 40%;
  background-color: ${(props) => props.theme.body};
  position: relative;
  border-radius: 10px;
  padding: 30px;

  &:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid ${(props) => props.theme.body};
    top: -20px;
    left: 20%;
  }

  @media (max-width: 760px) {
    width: 90%;
  }
`;
export const Title = styled.h1``;
export const Subtitle = styled.span`
  color: #6e57e0;
  font-weight: bold;
  text-decoration: underline solid #6e57e0 2px;
`;
export const SocialContainer = styled.div`
  padding-top: 20px;
  display: flex;
  font-size: 1.2rem;
  a {
    margin-left: 15px;
  }

  a:first-child {
    margin-left: 0;
  }
`;

export const ContatoImage = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-left-radius: 50px;
    border-top-right-radius: 0;
  }
  @media (max-width: 760px) {
    width: 100%;
    padding-bottom: 10px;
  }
`;

export const Description = styled.p``;
