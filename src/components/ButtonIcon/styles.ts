import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'DESTRUCTIVE'

type ButtonIconProps = {
  type: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
`

export const Icon = styled(Feather).attrs<ButtonIconProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK,
  }),
)``
