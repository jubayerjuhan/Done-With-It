import React from 'react';
import AppTextInput from './AppTextInput'
import { useFormikContext } from 'formik'
import ErrorMessage from '../ErrorMessage.js';
import { View } from 'react-native';

function AppFormField({ name, width, ...otherProps }) {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
  return (
    <>
      <AppTextInput
        width={width}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
}

export default AppFormField;