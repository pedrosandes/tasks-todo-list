import styled from "styled-components";

interface ButtonStyledProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'default' | 'primary' | 'secondary' | 'danger'
  variant?: 'outline' | 'text'
  fontSize?: string
  disableShadow?: boolean
}

interface sizeButtonProps {
  sm: string 
  md: string
  lg: string
}

const iconSize: sizeButtonProps = {
  sm: "14px",
  md: "18px",
  lg: "20px"
}

const sizeButton: sizeButtonProps = {
  sm: "6px 12px",
  md: "8px 16px",
  lg: "11px 22px"
}

interface colorButtonProps {
  default: string
  primary: string
  secondary: string
  danger: string
}

const colorButton: colorButtonProps = {
  default: `
  background-color: #E0E0E0;
  color: #3F3F3F;

  &:hover, &:focus {
    background: #AEAEAE;
  }
  `,
  primary: `
  background-color: #2962FF;
  color: #FFFFFF;

  &:hover, &:focus {
    background: #0039CB;
  }
  `,
  secondary: `
  background-color: #455A64;
  color: #FFFFFF;

  &:hover, &:focus {
    background: #1C313A;
  }
  `,
  danger: `
  background-color: #D32F2F;
  color: #FFFFFF;

  &:hover, &:focus {
    background: #9A0007;
  }
  `
}

interface variantButtonProps {
  outline: string
  text: string
}

const variantButton:variantButtonProps ={
  outline: `
  border: 1px solid #3D5AFE;
  color: #3D5AFE;
  background-color: transparent;

  &:hover, &:focus {
    background: rgba(41, 98, 255, 0.1);
  }`,
  text: `
  background-color: transparent;
  color: #3D5AFE;

  &:hover, &:focus {
    background: rgba(41, 98, 255, 0.1);
  }
  `
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${({fontSize}) => fontSize || "1.4rem"};
  line-height: 2rem;
  color: #3F3F3F;
  font-weight: 500;
  border-radius: 6px;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  cursor: pointer;
  padding: ${({size}) => size ? sizeButton[size] : sizeButton['md'] };

  ${({color}) => color ? colorButton[color] : colorButton['default']}
  
  ${({variant}) => variant && variantButton[variant]}
  
  ${({disableShadow}) => disableShadow && `
    box-shadow: unset;
  `}

  &:disabled {
    background: #E0E0E0;
    color: #9E9E9E;
    box-shadow: unset;
    border: none;
    cursor: not-allowed;
    ${({variant}) => variant === 'text' && `
      background-color: transparent;
    `}
    }

    svg {
      width: ${({size}) => size ? iconSize[size] : iconSize['md'] };
      height: ${({size}) => size ? iconSize[size] : iconSize['md'] };
    }
`