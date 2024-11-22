import { Header } from '@components/Header'
import { Container } from './styles'
import { Heading } from '@components/Heading'
import { SafeAreaView, ScrollView } from 'react-native'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Heading
        title="[Nome da turma]"
        text="Adicione a galera e separe os times"
      />

      <Input placeholder="Nome do participante" style={{ marginBottom: 20 }} />

      <ScrollView />

      <Button label="Remover turma" type="DESTRUCTIVE" />
      <SafeAreaView />
    </Container>
  )
}
