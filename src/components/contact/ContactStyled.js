import styled from "styled-components";

export const Contact = styled.div`
  margin: 0 auto;
`;
export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
`;
export const ContactIntro = styled.div`
  text-align: center;
`;
export const Title = styled.h1``;
export const Subtitle = styled.span``;
export const SocialContainer = styled.div`
  padding-top: 20px;
  display: flex;
  a {
    margin-left: 15px;
  }

  a:first-child {
    margin-left: 0;
  }
`;
export const Social = styled.a`
  font-size: 2.4rem;
  cursor: pointer;
  color: #6c5ce7;
  background-color: #f2f1f3;
  padding: 8px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 50px;
`;
