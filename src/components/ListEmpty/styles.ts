import { Ghost } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const Message = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Icon = styled(Ghost).attrs(({ theme }) => ({
  size: 96,
  color: theme.COLORS.GRAY_400,
  weight: 'light',
}))`
  margin-bottom: 12px;
`
