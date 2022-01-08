import { useFormikContext } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';
import ErrorMessage from '../ErrorMessage.js';
import ImageInputList from '../ImageInput/ImageInputList.js';

const AppFormImagePicker = ({ name }) => {
  const { setFieldTouched, setFieldValue, touched, errors, values } = useFormikContext();

  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
    setFieldTouched(name);
  }

  const handleDelete = (uri) => {
    setFieldValue(name, values[name].filter(imageUri => imageUri !== uri));
    setFieldTouched(name);
  }
  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onDeleteImage={handleDelete}
      />
      <ErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
}


export default AppFormImagePicker;