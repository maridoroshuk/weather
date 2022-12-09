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
export const RadioInput = styled.input``;
export const Label = styled.label``;
export const SelectWrapper = styled.div``;
