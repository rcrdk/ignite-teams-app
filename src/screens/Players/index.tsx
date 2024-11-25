import { Header } from '@components/Header'
import { Container, Form, HeaderList, PlayersCounter } from './styles'
import { Heading } from '@components/Heading'
import { Alert, FlatList, TextInput } from 'react-native'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'
import { useEffect, useRef, useState } from 'react'
import { PlayerCard } from '@components/PlayerCard'
import { ListEmpty } from '@components/ListEmpty'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AppError } from '@utils/app-error'
import { PlayerStorageDTO } from '@dtos/PlayerStorageDTO'
import { addPlayerToGroup } from '@storage/players/addPlayerToGroup'
import { getPlayersByGroupAndTeam } from '@storage/players/getPlayersByGroupAndTeam'
import { removePlayerByGroup } from '@storage/players/removePlayerByGroup'
import { removeGroupByName } from '@storage/group/removeGroupByName'
import { Loading } from '@components/Loading'

type RouteParams = {
  group: string
}

export function Players() {
  const [currentTeam, setCurrentTeam] = useState('Time A')
  const [newPlayerName, setNewPlayerName] = useState('')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const newPlayerNameInputRef = useRef<TextInput>(null)

  const route = useRoute()
  const navigation = useNavigation()

  const { group: currentGroup } = route.params as RouteParams

  async function handleAddPlayer() {
    try {
      const newPlayer: PlayerStorageDTO = {
        name: newPlayerName,
        team: currentTeam,
      }

      await addPlayerToGroup(newPlayer, currentGroup)

      fetchPlayersByTeam()

      newPlayerNameInputRef.current?.blur()
      setNewPlayerName('')
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo participante', error.message)
      } else {
        Alert.alert(
          'Novo participante',
          'Não foi possível adicionar um novo participante',
        )
        console.error(error)
      }
    }
  }

  async function removePlayer(playerName: string) {
    try {
      await removePlayerByGroup(playerName, currentGroup)
      fetchPlayersByTeam()
    } catch (error) {
      console.error(error)
      Alert.alert(
        'Ocorreu um erro',
        'Houve um erro ao tentar remover o participante. Tente novamente mais tarde.',
      )
    }
  }

  async function handleRemovePlayer(playerName: string) {
    Alert.alert(
      'Remover participante',
      `Deseja remover ${playerName} da lista de participantes?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Remover',
          style: 'destructive',
          onPress() {
            removePlayer(playerName)
          },
        },
      ],
    )
  }

  async function removeGroup() {
    try {
      await removeGroupByName(currentGroup)
      navigation.navigate('groups')
    } catch (error) {
      console.error(error)
      Alert.alert(
        'Ocorreu um erro',
        'Houve um erro ao tentar remover a turma. Tente novamente mais tarde.',
      )
    }
  }

  async function handleRemoveGroup() {
    Alert.alert(
      'Remover grupo',
      `Deseja remover a turma ${currentGroup} e todos seus participantes?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Remover',
          style: 'destructive',
          onPress() {
            removeGroup()
          },
        },
      ],
    )
  }

  async function fetchPlayersByTeam() {
    setIsLoading(true)

    try {
      const playersByTeam = await getPlayersByGroupAndTeam(
        currentGroup,
        currentTeam,
      )

      setPlayers(playersByTeam)
    } catch (error) {
      console.error(error)
      Alert.alert(
        'Ocorreu um erro',
        'Houve um erro ao tentar carregar os participante do time selecionado. Tente novamente mais tarde.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPlayersByTeam()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTeam])

  return (
    <Container>
      <Header showBackButton />
      <Heading
        title={currentGroup}
        text="Adicione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder="Nome do participante"
          autoCorrect={false}
          enterKeyHint="send"
          returnKeyType="send"
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          inputRef={newPlayerNameInputRef}
        />
        <ButtonIcon icon="plus-circle" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              label={item}
              isActive={item === currentTeam}
              onPress={() => setCurrentTeam(item)}
              key={item}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
        />

        <PlayersCounter>{players.length}</PlayersCounter>
      </HeaderList>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handleRemovePlayer(item.name)}
              key={item.name}
            />
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
      )}

      <Button
        label="Remover Turma"
        type="DESTRUCTIVE"
        onPress={handleRemoveGroup}
      />
    </Container>
  )
}
