import { Groups } from '@screens/Groups'
import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import defaultTheme from '@theme/index'
import { Loading } from '@components/Loading'
import { StatusBar } from 'react-native'
import { NewGroup } from '@screens/NewGroup'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      {fontsLoaded ? <NewGroup /> : <Loading />}
      {/* {fontsLoaded ? <Groups /> : <Loading />} */}

      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  )
}
