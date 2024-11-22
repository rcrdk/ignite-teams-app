import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'DESTRUCTIVE'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, type }) =>
    type === 'DESTRUCTIVE' ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_700};
`

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`
