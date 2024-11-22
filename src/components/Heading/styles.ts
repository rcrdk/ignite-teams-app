import styled from 'styled-components/native'
import { css } from 'styled-components/native'

export const Container = styled.View`
  padding-top: ${({ theme }) => theme.SPACE.Y}px;
  padding-bottom: ${({ theme }) => theme.SPACE.Y}px;
  gap: 8px;
`

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Text = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
