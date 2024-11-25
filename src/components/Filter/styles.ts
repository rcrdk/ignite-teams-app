import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type FilterStyleProps = {
  isActive?: boolean
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  border-radius: 4px;
  margin-right: 12px;
  width: 84px;
  height: 38px;
  align-items: center;
  justify-content: center;

  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 2px solid ${theme.COLORS.GREEN_700};
    `}
`

export const Label = styled.Text`
  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
`
