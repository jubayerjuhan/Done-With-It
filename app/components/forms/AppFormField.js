import React from 'react';
import AppTextInput from './AppTextInput'
import { useFormikContext } from 'formik'
import ErrorMessage from '../ErrorMessage.js';
import { View } from 'react-native';

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldValue, setFieldTouched, touched, errors, values } = useFormikContext();
  return (
    <>
      <AppTextInput
        width={width}
        onChangeText={text => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
}

export default AppFormField;