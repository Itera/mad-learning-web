import React from 'react';
import { useField, ErrorMessage } from 'formik';
import FieldLabel from 'src/components/fields/FieldLabel';
import TextArea from 'src/components/inputs/TextArea';
import {
  FormikContainer,
  EventError,
} from 'src/components/FormikFields/styled';

function FormikTextAreaField(props: any) {
  const [field, meta] = useField(props);
  const errorState = meta.touched && meta.error;

  return (
    <FormikContainer>
      <FieldLabel htmlFor={props.name}>{props.label}</FieldLabel>
      <TextArea {...field} {...props} errorState={errorState} />
      {errorState && (
        <EventError>
          <ErrorMessage name={props.name} />
        </EventError>
      )}
    </FormikContainer>
  );
}

export default FormikTextAreaField;
