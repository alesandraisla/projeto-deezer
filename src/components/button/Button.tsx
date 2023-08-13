import { ButtonContainer } from "./ButtonStyles";
import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary',
  children?: React.ReactNode 
}

export function Button({ variant, children }: ButtonProps) {
  return (
    <ButtonContainer variant={variant}>
      {children}
    </ButtonContainer>
  );
}
