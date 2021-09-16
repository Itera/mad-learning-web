import React from 'react';
import { useField, ErrorMessage } from 'formik'
import { EventError, FormikContainer } from './styled';
import Input from 'src/components/inputs/Input';
import FieldLabel from 'src/components/fields/FieldLabel';

function FormikInputField (props : any) {
  const [field, meta] = useField(props);
  return (
    <FormikContainer>
      <FieldLabel htmlFor={props.name}>{props.label}</FieldLabel>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? (
        <EventError>
          <ErrorMessage name={props.name} />
        </EventError>   
      ) : null}
    </FormikContainer>
  );

}

export default FormikInputField;
