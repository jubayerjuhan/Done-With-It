import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import * as yup from 'yup'

import Screen from "./../components/Screen";
import { AppFormField, AppForm } from "./../components/forms";
import SubmitButton from "./../components/SubmitButton";
import AppFormPicker from "./../components/forms/AppFormPicker";
import CategoryPicker from '../components/Picker/CategoryPicker.js';
import AppFormImagePicker from '../components/forms/AppFormImagePicker.js';
import { useLocation } from '../Hooks/useLocation.js';

const ListingEditScreen = () => {
  const [location, setLocation] = useState('')
  const validationSchema = yup.object().shape({
    title: yup.string().required().min(1).label("Title"),
    price: yup.number().required().min(1).max(10000).label("Price"),
    description: yup.string().required().min(5).max(255).label("Description"),
    category: yup.string().required().label("Category"),
    images: yup.array().min(1, "Please select at least one image")
  })
  const locations = useLocation()
  console.log(locations)
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          category: "",
          description: "",
          price: "",
          title: "",
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(location)}
      >
        <AppFormImagePicker
          name='images'
        />

        <AppFormField
          name="title"
          placeholder="Title"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormField
          name="price"
          placeholder="Price"
          autoCapitalize="none"
          keyboardType="numeric"
          autoCorrect={false}
          width="40%"
        />
        <AppFormField
          name="description"
          placeholder="Description"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormPicker
          name='category'
          placeholder="Category"
          PickerItemComponent={CategoryPicker}
        />
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
