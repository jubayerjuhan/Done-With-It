import React from 'react'
import AppPicker from "./../Picker/AppPicker";
import { useFormikContext } from "formik";
import ErrorMessage from "./../ErrorMessage";

const AppFormPicker = ({ name, width, PickerItemComponent, ...otherProps }) => {
  const { setFieldValue, errors, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        name={name}
        PickerItemComponent={PickerItemComponent}
        width={width}
        onSelectItem={val => setFieldValue(name, val.value)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  )
}

export default AppFormPicker
