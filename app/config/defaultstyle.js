import { Platform } from "react-native";
import Colors from "./Colors.js";

export default {
  text: {
    color: Colors.dark,
    fontSize: 16,
    ...Platform.select({
      ios: {
        fontFamily: 'Avenir',
      },
      android: {
        fontFamily: 'Roboto',
      }
    })
  },
}