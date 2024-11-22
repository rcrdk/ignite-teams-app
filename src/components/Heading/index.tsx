import { Container, Text, Title } from './styles'

type HeadingProps = {
  title: string
  text: string
}

export function Heading({ title, text }: HeadingProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  )
}
