import { Header } from '@components/Header'
import { Container } from './styles'
import { Heading } from '@components/Heading'
import { GroupCard } from '@components/GroupCard'
import { Alert, FlatList } from 'react-native'
import { useState, useCallback } from 'react'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { getAllGroups } from '@storage/group/getAllGroups'
import { Loading } from '@components/Loading'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    setIsLoading(true)

    try {
      const data = await getAllGroups()
      setGroups(data)
    } catch (error) {
      console.error(error)
      Alert.alert(
        'Ocorreu um erro',
        'Houve um erro ao tentar carregar as turmas. Tente novamente mais tarde.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  function handleShowGroup(name: string) {
    navigation.navigate('players', { group: name })
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, []),
  )

  return (
    <Container>
      <Header />
      <Heading title="Turmas" text="Jogue com a sua turma" />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <GroupCard
              title={item}
              onPress={() => handleShowGroup(item)}
              key={item}
            />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
        />
      )}

      <Button label="Criar Nova Turma" onPress={handleNewGroup} />
    </Container>
  )
}
