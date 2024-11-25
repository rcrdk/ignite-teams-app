import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  flex-direction: row;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  align-items: center;
  margin-bottom: 12px;
  border-radius: 6px;
`

export const Name = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 16px;
  margin-right: 12px;
`
