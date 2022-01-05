import React from 'react'
import AppPicker from "./../Picker/AppPicker";
import { useFormikContext } from "formik";
import ErrorMessage from "./../ErrorMessage";

const AppFormPicker = ({ name, ...otherProps }) => {
  const { setFieldValue, errors, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        onSelectItem={value => setFieldValue(name, value.label)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  )
}

export default AppFormPicker
