import styled, { css } from 'styled-components/native'

export const Container = styled.TextInput`
  flex-grow: 1;
  padding: 16px;
  height: 56px;
  border-radius: 6px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    background-color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
