import { Header } from '@components/Header'
import { Container, Form, HeaderList, PlayersCounter } from './styles'
import { Heading } from '@components/Heading'
import { FlatList, SafeAreaView } from 'react-native'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'
import { useState } from 'react'
import { PlayerCard } from '@components/PlayerCard'
import { ListEmpty } from '@components/ListEmpty'

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState([
    'Ricardo',
    'Madonna',
    'Rihanna',
    'Lady Gaga',
    'Britney Spears',
    'Katy Perry',
  ])

  return (
    <Container>
      <Header showBackButton />
      <Heading
        title="[Nome da turma]"
        text="Adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="plus-circle" />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              label={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
              key={item}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
        />

        <PlayersCounter>{players.length}</PlayersCounter>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} key={item} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <ListEmpty message="Que tal cadastrar o primeiro jogador?" />
        }
        contentContainerStyle={[
          { paddingBottom: 80 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button label="Remover turma" type="DESTRUCTIVE" />
      <SafeAreaView />
    </Container>
  )
}
