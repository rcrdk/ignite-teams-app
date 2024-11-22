import styled from 'styled-components/native'
import { CaretLeft } from 'phosphor-react-native'

export const Container = styled.View`
  padding-top: ${({ theme }) => theme.SPACE.HEADER_Y};
  padding-left: ${({ theme }) => theme.SPACE.X};
  padding-right: ${({ theme }) => theme.SPACE.X};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Image = styled.Image`
  width: 46px;
  height: 55px;
`

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 32,
}))``
