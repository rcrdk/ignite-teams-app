import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  padding-left: ${({ theme }) => theme.SPACE.X}px;
  padding-right: ${({ theme }) => theme.SPACE.X}px;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Form = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const HeaderList = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`

export const PlayersCounter = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
    margin-left: 20px;
  `}
`
