import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
    body,header{
        background-color: ${(props)=>props.isNightMode?"#1a2a3c":"#f9f9f9"};
        color: ${(props)=>props.isNightMode?"#f9f9f9":"#1a2a3c"};
    }
    .box-card{
        box-shadow: 0 0 30px 9px ${(props)=>props.isNightMode?"#121212":"#989898"};
    }
    .top-link{
        border: 1px solid ${(props)=>props.isNightMode?"#989898":"#121212"};
    }
    svg{
        color: ${(props)=>props.isNightMode?"#f9f9f9":"#1a2a3c"};
    }
`;


export default GlobalStyle