import { Header } from '@components/Header'
import { CenterContent, Container, Icon } from './styles'
import { Heading } from '@components/Heading'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

export function NewGroup() {
  const [name, setName] = useState('')

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('players', { group: name })
  }

  return (
    <Container>
      <Header showBackButton />

      <CenterContent>
        <Icon />
        <Heading
          title="Nova turma"
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
            onSubmitEditing={() => {
              handleNewGroup()
            }}
          />
          <Button label="Criar turma" onPress={handleNewGroup} />
        </View>
      </CenterContent>
    </Container>
  )
}
