import styled from 'styled-components';

export const Container = styled.div`
    max-width:  ${({ theme: { width } }) => `${width[1080]}px`};
    width: 80%;
    margin: ${({ theme: { spaces } }) => `${spaces.l}px`} auto;
`;
