import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton.js'
import Colors from '../config/Colors.js'

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground blurRadius={5} style={styles.background} source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={{
          height: 150,
          width: 150
        }} source={require('../assets/logo-red.png')} />
        <Text style={styles.mottoText}>Sell What You Dont Need Anymore!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" color='primary' onPress={() => navigation.navigate('Login')} />
        <AppButton title="Register" color='secondary' onPress={() => navigation.navigate('Register')} />
      </View>
    </ImageBackground>
  )


}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 10,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 100,
  },
  mottoText: {
    fontSize: 15,
    marginVertical: 10,
    fontWeight: 'bold',

  },
  loginBtn: {
    height: 70,
    width: '100%',
    backgroundColor: '#fc5c65',
  },
  registerButton: {
    height: 70,
    width: '100%',
    backgroundColor: '#4ecde4',
  }
})
export default WelcomeScreen
