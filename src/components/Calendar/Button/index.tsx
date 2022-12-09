import React from 'react';
import { StyledButton } from './styled';

interface IButton {
    onClick: () => void;
    text: string;
}

function Button({ onClick, text }: IButton) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {text}
    </StyledButton>
  );
}

export default Button;
