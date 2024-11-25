import { TouchableOpacityProps } from 'react-native'
import { Container, Label, FilterStyleProps } from './styles'

type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    label: string
  }

export function Filter({ label, isActive = false, ...props }: FilterProps) {
  return (
    <Container isActive={isActive} {...props}>
      <Label>{label}</Label>
    </Container>
  )
}
