import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
    }

    #root {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100vh;
    }   

    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background-color: #444444; 
        border-radius: 8px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #296eff; 
        border-radius: 8px;
        height: 32px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #296eff;
    }

    p::selection {
        background-color: #444444; 
        color: #fff; 
        caret-color: #fff; 
    }
`

export default GlobalStyle