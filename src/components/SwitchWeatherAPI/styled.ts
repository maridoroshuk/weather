import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.span`
  margin-right: ${({ theme: { spaces } }) => `${spaces.s}px`};
`;
export const SelectWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  gap: ${({ theme: { spaces } }) => `${spaces.s}px`};
`;
