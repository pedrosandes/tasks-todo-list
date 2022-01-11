import * as S from "./styles"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disableShadow?: boolean
  variant?: 'outline' | 'text'
  size?: 'sm' | 'md' | 'lg'
  color?: 'default' | 'primary' | 'secondary' | 'danger'
  startIcon?: React.SVGAttributes<SVGElement>
  endIcon?: React.SVGAttributes<SVGElement>
}

const Button: React.FC<Props> = (
  {
    children, 
    color,
    variant,
    disableShadow,
    size,
    startIcon,
    endIcon,
    ...props
  }
    ) => {
  return (
    <S.ButtonStyled
    size={size}
    disableShadow={disableShadow}
    color={color}  
    variant={variant}
    {...props}
    >
     
      {startIcon}
      {children}
      {endIcon}
    </S.ButtonStyled>
  )
}

export default Button