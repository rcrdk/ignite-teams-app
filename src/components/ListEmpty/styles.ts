import { Ghost } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding-top: 16px;
  padding-bottom: 16px;
  justify-content: center;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const Message = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
  `}
`

export const Icon = styled(Ghost).attrs(({ theme }) => ({
  size: 96,
  color: theme.COLORS.GRAY_400,
  weight: 'light',
}))`
  margin-bottom: 12px;
`
