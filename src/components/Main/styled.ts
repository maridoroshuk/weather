import styled from 'styled-components';

export const Wrapper = styled.div`
background-size: cover;
padding: ${({ theme: { spaces } }) => `${spaces.l}px`};
margin: ${({ theme: { spaces } }) => `${spaces.xl}px`};
border-radius: ${({ theme: { spaces } }) => `${spaces.l}px`};
`;
