import styled from "styled-components"

export const FooterDiv = styled.div`
    background-color: ${({theme}) => theme.colors.footer};
    font-size: 0.9em;
    text-align: center;
    padding: 15px 20px;
    opacity: 0.8;
    font-weight: 200;
    position: fixed;
    bottom: 0;
    width: 100%;
`