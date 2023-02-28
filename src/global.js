import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.color};
}

a {
    color: ${(props) => props.theme.color};
}

p,
span {
  color: ${(props) => props.theme.colorSecundary};
}
`;
