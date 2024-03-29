import React from 'react';
import { useField, ErrorMessage } from 'formik';
import {
  FormikContainer,
  EventError,
} from 'src/components/FormikFields/styled';
import Input from 'src/components/inputs/Input';
import FieldLabel from 'src/components/fields/FieldLabel';

function FormikInputField(props: any) {
  const [field, meta] = useField(props);
  const errorState = meta.touched && meta.error;

  return (
    <FormikContainer>
      <FieldLabel htmlFor={props.name}>{props.label}</FieldLabel>
      <Input {...field} {...props} errorState={errorState} />
      {errorState && (
        <EventError>
          <ErrorMessage name={props.name} />
        </EventError>
      )}
    </FormikContainer>
  );
}

export default FormikInputField;
