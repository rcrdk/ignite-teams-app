import { UsersThree } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  height: 90px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.SPACE.X}px;
  margin-bottom: 12px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
  size: 32,
  weight: 'fill',
}))`
  margin-right: ${({ theme }) => theme.SPACE.X}px;
`