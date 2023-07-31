import { StyledHeader, Nav, Logo } from './styles/Header.styled';
import Form from './Form';

function Header({ movieSearch }) {
    return (
        <StyledHeader>
            <Nav>
                <Logo>🍿PopcornMovie</Logo>
                <Form movieSearch={movieSearch} />
            </Nav>
        </StyledHeader>
    )
}

export default Header