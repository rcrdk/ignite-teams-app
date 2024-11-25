import { Header } from '@components/Header'
import { CenterContent, Container, Icon } from './styles'
import { Heading } from '@components/Heading'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert, View } from 'react-native'
import { groupCreate } from '@storage/group/createGroup'
import { AppError } from '@utils/app-error'

export function NewGroup() {
  const [name, setName] = useState('')

  const navigation = useNavigation()

  async function handleNewGroup() {
    try {
      await groupCreate(name)
      navigation.navigate('players', { group: name })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message)
      } else {
        Alert.alert('Novo grupo', 'Não foi possível criar um novo grupo')
        console.error(error)
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <CenterContent>
        <Icon />
        <Heading
          title="Nova Turma"
          text="Crie uma turma para adicionar pessoas"
        />

        <View>
          <Input
            placeholder="Nome da turma"
            value={name}
            onChangeText={setName}
            style={{ marginBottom: 20 }}
            enterKeyHint="send"
            returnKeyType="send"
            onSubmitEditing={handleNewGroup}
          />
          <Button label="Criar Turma" onPress={handleNewGroup} />
        </View>
      </CenterContent>
    </Container>
  )
}
