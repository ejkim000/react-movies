import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px 15px 40px 15px;
    margin-bottom: 48px;
    max-width: 1000px;
    margin: 0 auto;
`
export const Title = styled.h1`
    font-size: 2.7em;
`
export const Error = styled.h1`
    font-size: 3em;
    margin: 30px auto;
    text-align: center;
`
export const Img = styled.img`
    width: 50%;
    margin-right: 20px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 94vw;
        margin-right: 0;
    }
`