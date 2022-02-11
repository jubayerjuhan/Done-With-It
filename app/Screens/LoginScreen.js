import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as yup from 'yup'

import Screen from '../components/Screen.js';
import SubmitButton from '../components/SubmitButton.js';
import { AppForm, AppFormField } from '../components/forms';
import auth from '../api/auth.js';
import AppText from '../components/AppText/AppText.js';
import useAuth from '../Hooks/useAuth.js';


// defineing validation schema for login form
const validationSchema = yup.object().shape({
  email: yup.string().email().required().label('Email'),
  password: yup.string().required().min(5).label('Password'),
})



function LoginScreen() {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { login } = useAuth()

  const handleSubmit = async (values) => {
    const { data, ok, problem } = await auth.loginUser(values)
    setError(null)
    if (!ok) {
      if (problem === 'TIMEOUT_ERROR') return setError('Please Try Again Later')
      return setError(data.error)
    }
    login(data)
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <AppText>{success}{error}</AppText>

      <AppForm
        initialValues={{ email, password }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => handleSubmit(values)}
      >
        <AppFormField
          icon="email"
          name="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
        />
        <AppFormField
          icon="lock"
          name="password"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry />

        <SubmitButton title="Submit" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: 'center',
  }
})

export default LoginScreen;