import styled from 'styled-components/native'

export const Container = styled.View`
  padding-left: ${({ theme }) => theme.SPACE.X};
  padding-right: ${({ theme }) => theme.SPACE.X};
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`
