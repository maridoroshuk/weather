import { WIDTH } from '@constants/sizes';
import styled from 'styled-components';

export const Container = styled.div`
    max-width: ${WIDTH[1080]};
    width: 80%;
    margin: ${({ theme: { spaces } }) => `${spaces.l}px`} auto;
`;
