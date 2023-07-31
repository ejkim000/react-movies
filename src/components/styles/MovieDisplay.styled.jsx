import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px;
    margin-bottom: 48px;
`
export const Title = styled.h1`
    font-size: 3em;
`

export const Img = styled.img`
    width: 40vw;
    margin-right: 40px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 90vw;
        margin-right: 0;
    }
`