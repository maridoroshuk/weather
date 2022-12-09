import styled from 'styled-components';

export const Wrapper = styled.div`
background-size: cover;
padding: ${({ theme: { spaces } }) => `${spaces.xs}px`};
margin: ${({ theme: { spaces } }) => `${spaces.l}px`};
border-radius: ${({ theme: { spaces } }) => `${spaces.l}px`};
`;
