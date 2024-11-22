import { Header } from '@components/Header'
import { CenterContent, Container, Icon } from './styles'
import { Heading } from '@components/Heading'
import { SafeAreaView } from 'react-native'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <CenterContent>
        <Icon />
        <Heading
          title="Nova turma"
          text="Crie uma turma para adicionar pessoas"
        />

        <Input placeholder="Nome da turma" style={{ marginBottom: 20 }} />
        <Button label="Criar turma" />
      </CenterContent>

      <SafeAreaView />
    </Container>
  )
}
