import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/config'
import { getAllGroups } from './getAllGroups'
import { AppError } from '@utils/app-error'

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await getAllGroups()

    if (newGroup.trim().length === 0) {
      throw new AppError('Informe um nome para o seu grupo')
    }

    const groupAlreadyExists = storedGroups.includes(newGroup.trim())
    if (groupAlreadyExists) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.')
    }

    const storage = [newGroup.trim(), ...storedGroups]

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(storage))
  } catch (error) {
    throw error
  }
}
