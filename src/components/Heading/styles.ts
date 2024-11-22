import styled from 'styled-components/native'

export const Container = styled.View`
  padding-top: ${({ theme }) => theme.SPACE.Y};
  padding-bottom: ${({ theme }) => theme.SPACE.Y};
  gap: 8px;
`

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Text = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`
