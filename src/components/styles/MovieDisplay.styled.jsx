import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px 15px 40px 15px;
    margin-bottom: 48px;
    max-width: 1000px;
    margin: 0 auto;
`
export const Title = styled.h1`
    font-size: 3em;
`

export const Img = styled.img`
    width: 50%;
    margin-right: 20px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 94vw;
        margin-right: 0;
    }
`