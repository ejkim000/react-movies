import styled from 'styled-components';

export const Container = styled.div`
    margin: 30px;
`
export const Title = styled.h1`
    font-size: 3em;
`

export const Img = styled.img`
    width: 45vw;
    margin-right: 40px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 90vw;
        margin-right: 0;
    }
`