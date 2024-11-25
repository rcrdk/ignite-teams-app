import { PlayerStorageDTO } from '@dtos/PlayerStorageDTO'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '@storage/config'
import { AppError } from '@utils/app-error'
import { getPlayersByGroup } from './getPlayersByGroup'

export async function addPlayerToGroup(
  newPlayer: PlayerStorageDTO,
  group: string,
) {
  try {
    const stored = await getPlayersByGroup(group)

    if (newPlayer.name.trim().length === 0) {
      throw new AppError('Informe o nome de um jogador')
    }
    const playerAlreadyExists = stored.filter(
      player => player.name === newPlayer.name.trim(),
    )

    if (playerAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa já está adicionada em um time.')
    }

    const storage = JSON.stringify([
      { ...newPlayer, name: newPlayer.name.trim() },
      ...stored,
    ])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (error) {
    throw error
  }
}
