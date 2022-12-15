import React from 'react';
import { Label, RadioInput } from './styled';

interface ISelectButton {
  id: string;
  value: string;
  handleOnCHange: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  isChecked: boolean;
  label: string;
}

function SelectButton({
  id,
  value,
  handleOnCHange,
  isChecked,
  label,
}: ISelectButton) {
  return (
    <>
      <RadioInput
        data-testid={id}
        type="radio"
        id={id}
        value={value}
        onChange={handleOnCHange}
        checked={isChecked}
      />
      <Label htmlFor={id}>{label}</Label>
    </>
  );
}

export default SelectButton;
