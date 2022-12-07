import React from 'react';
import { StyledButton } from './styled';

interface IButtonProps {
    onClick: () => void;
    text: string;
}

function Button({ onClick, text }: IButtonProps) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {text}
    </StyledButton>
  );
}

export default Button;
