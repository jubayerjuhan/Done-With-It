import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'

import Screen from '../components/Screen.js';
import SubmitButton from '../components/SubmitButton.js';
import AppForm from '../components/forms/AppForm.js'
import AppFormField from '../components/forms/AppFormField.js';


// defineing validation schema for login form
const validationSchema = yup.object().shape({
  email: yup.string().email().required().label('Email'),
  password: yup.string().required().min(5).label('Password'),
})

function LoginScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppForm
        initialValues={{ email, password }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
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