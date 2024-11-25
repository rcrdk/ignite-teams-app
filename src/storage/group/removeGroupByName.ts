import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/config'
import { getAllGroups } from './getAllGroups'

export async function removeGroupByName(deleteGroup: string) {
  try {
    const storedGroups = await getAllGroups()
    const groups = storedGroups.filter(group => group !== deleteGroup)

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))

    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${deleteGroup}`)
  } catch (error) {
    throw error
  }
}
