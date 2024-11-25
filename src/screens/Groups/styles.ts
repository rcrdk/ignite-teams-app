import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  padding-left: ${({ theme }) => theme.SPACE.X}px;
  padding-right: ${({ theme }) => theme.SPACE.X}px;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`
