import { Header } from '@components/Header'
import { Container } from './styles'
import { Heading } from '@components/Heading'
import { GroupCard } from '@components/GroupCard'
import { FlatList, SafeAreaView } from 'react-native'
import { useState } from 'react'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'

export function Groups() {
  const [groups, setGroup] = useState([
    'Rocketseat',
    'Sou Digital',
    'Meu Rosinha',
  ])

  return (
    <Container>
      <Header />
      <Heading title="Turmas" text="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <GroupCard title={item} key={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button label="Criar nova turma" />
      <SafeAreaView />
    </Container>
  )
}
