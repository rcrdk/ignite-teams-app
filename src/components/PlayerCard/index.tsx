import { ButtonIcon } from '@components/ButtonIcon'
import { Container, Icon, Name } from './styles'

type PlayerCardProps = {
  name: string
  onRemove: () => void
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <Container>
      <Icon name="user" />
      <Name>{name}</Name>
      <ButtonIcon icon="minus-circle" type="DESTRUCTIVE" onPress={onRemove} />
    </Container>
  )
}
