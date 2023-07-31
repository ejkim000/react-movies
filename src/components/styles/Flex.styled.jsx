import styled from "styled-components";


export const Flex = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: ${({ direction }) => direction || 'row'};
    justify-content: space-btween;

    & > div{
        flex: 1;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
`