import styled from 'styled-components';

export const  StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    padding: 15px;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        justify-content: center;
    }
`

export const Logo = styled.div`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    text-shadow: 5px 5px 7px rgba(0, 0, 0, 0.2);
    margin: 15px 5px;
`

export const Input = styled.input`
    border-radius: 4px;
    border: none;
    font-size: 18px;
    margin: 15px 5px;
    padding: 5px;
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.2);
`

export const Button = styled.button`
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-size: 20px;
    background-color: transparent;
    color: '#333';
    text-shadow: 5px 5px 7px rgba(0, 0, 0, 0.2);
    margin: 15px 5px;

    &:hover {
        transform: scale(1.25);
    }
`