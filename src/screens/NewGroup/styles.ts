import { UsersThree } from 'phosphor-react-native'
import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  padding-left: ${({ theme }) => theme.SPACE.X}px;
  padding-right: ${({ theme }) => theme.SPACE.X}px;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const CenterContent = styled.View`
  flex: 1;
  justify-content: center;
  padding-bottom: 75px;
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
  size: 56,
}))`
  align-self: center;
`
