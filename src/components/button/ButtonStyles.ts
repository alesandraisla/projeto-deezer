import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const ButtonVariants = {
  primary: 'purple',
  secondary: 'red'
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  text-decoration: none;
  width: 100px;
  height: 40px;

  ${(props) =>
    props.variant &&
    css`
      background-color: ${ButtonVariants[props.variant]};
    `}
`;
