import React from 'react';
import { useField } from 'formik'
import FieldLabel from 'src/components/fields/FieldLabel';
import TextArea from 'src/components/inputs/TextArea';
import { EventError, FormikContainer } from '../FormikInputField/styled';

function FormikTextAreaField (props : any) {
  const [field, meta] = useField(props);
  return (
    <FormikContainer> 
      <FieldLabel htmlFor={props.name}>{props.label}</FieldLabel>
      <TextArea {...field} {...props} />
      {meta.touched && meta.error ? (
        <EventError className="error" style={{color: "red"}}>{meta.error}</EventError>
      ) : null}
    </FormikContainer>
  );

}

export default FormikTextAreaField;
