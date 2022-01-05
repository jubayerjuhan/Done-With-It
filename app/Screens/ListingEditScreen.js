import React from 'react'
import { StyleSheet } from 'react-native';
import * as yup from 'yup'

import Screen from "./../components/Screen";
import { AppFormField, AppForm } from "./../components/forms";
import SubmitButton from "./../components/SubmitButton";
import AppFormPicker from "./../components/forms/AppFormPicker";

const ListingEditScreen = () => {

  const validationSchema = yup.object().shape({
    title: yup.string().required().min(1).label("Title"),
    price: yup.number().required().min(1).max(10000).label("Price"),
    description: yup.string().required().min(5).max(255).label("Description"),
    category: yup.string().required().label("Category"),
  })
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          category: "",
          description: "",
          price: "",
          title: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField
          name="title"
          placeholder="Title"
          icon="title"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormField
          name="price"
          placeholder="Price"
          icon="attach-money"
          autoCapitalize="none"
          keyboardType="numeric"
          autoCorrect={false}
        />
        <AppFormField
          name="description"
          placeholder="Description"
          icon="description"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <AppFormPicker name='category' icon='apps' placeholder="Category" />

        <SubmitButton title="Submit Edit" />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 50,
  }
})
export default ListingEditScreen
