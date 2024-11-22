import { SafeAreaView } from 'react-native'
import { BackButton, BackIcon, Container, Image } from './styles'
import brandImage from '@assets/logo.png'

type HeaderProps = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <SafeAreaView>
      <Container>
        {showBackButton && (
          <BackButton>
            <BackIcon />
          </BackButton>
        )}
        <Image source={brandImage} />
      </Container>
    </SafeAreaView>
  )
}
