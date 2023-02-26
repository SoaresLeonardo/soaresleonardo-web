import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 1120px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const TitleContainer = styled.div`
  text-align: end;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  display: flex;
  font-weight: bold;
  align-items: center;
`;
export const Menu = styled.div`
  font-size: 20px;
  display: none;
  cursor: pointer;

  @media (max-width: 560px) {
    display: flex;
    position: absolute;
    left: 80%;
  }
  @media (max-width: 340px) {
    left: 70%;
  }
  @media (max-width: 280px) {
    display: flex;
    position: inherit;
  }
`;
export const HeaderLinks = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 560px) {
    flex-direction: column;
    background-color: #6e57e0;
    position: fixed;
    height: 60%;
    gap: 0px;
    top: 90px;
    right: 0px;
    width: 100%;
    right: ${(props) => (props.sidebar ? "0" : "-100%")};
    transition: 0.3s;
    a {
      margin-top: 30px;
      margin-left: 10px;
    }
  }
`;

export const Link = styled.div`
  font-size: 16px;

  a {
    position: relative;
    text-decoration: none;
  }

  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 0;
    left: 0;
    background-color: #6c5ce7;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
  }

  a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;
