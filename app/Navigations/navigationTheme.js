import { DefaultTheme } from '@react-navigation/native'
import Colors from '../config/Colors.js'

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
    primary: Colors.primary
  }
}

