import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as yup from 'yup';

import Screen from "./../components/Screen";
import { AppForm, AppFormField } from '../components/forms';
import SubmitButton from "./../components/SubmitButton";
import auth from '../api/auth.js';
import AppText from '../components/AppText/AppText.js';
import useAuth from '../Hooks/useAuth.js';



// validation schema
const validationSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
  email: yup.string().email().required().label('Email'),
  password: yup.string().min(5).required().label('Password'),
});



function RegisterScreen() {
  const [error, setError] = useState(null);
  const { login } = useAuth()

  const handleSubmit = async (values) => {
    setError(null);
    const { ok, data, status, problem } = await auth.registerUser(values)
    if (!ok) {
      console.log(status, problem)
      if (status === 400 || problem === 'CLIENT_ERROR') return setError(data.error)
      return setError('Unknown Error Occoured, Try again later')
    }
    login(data);
  }
  return (
    <Screen style={styles.container}>
      <AppText>{error}</AppText>
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
          icon="people"
          placeholder="Name"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormField
          name="email"
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormField
          name="password"
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />

        <SubmitButton title='Register' />

      </AppForm>
    </Screen>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 50,
  }
})

export default RegisterScreen;