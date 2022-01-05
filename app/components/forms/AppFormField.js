import React from 'react';
import AppTextInput from './AppTextInput'
import { useFormikContext } from 'formik'
import ErrorMessage from '../ErrorMessage.js';

function AppFormField({ name, ...otherProps }) {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
}

export default AppFormField;