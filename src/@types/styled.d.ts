import 'styled-components/native'
import baseTheme from '@theme/index'

declare module 'styled-components/native' {
  type ThemeType = typeof baseTheme

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
