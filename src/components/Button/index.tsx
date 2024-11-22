import { ButtonTypeStyleProps, Container, Label } from './styles'
import { TouchableOpacityProps } from 'react-native'

type ButtonProps = TouchableOpacityProps & {
  label: string
  type?: ButtonTypeStyleProps
}

export function Button({ label, type = 'PRIMARY', ...props }: ButtonProps) {
  return (
    <Container type={type} {...props}>
      <Label>{label}</Label>
    </Container>
  )
}
