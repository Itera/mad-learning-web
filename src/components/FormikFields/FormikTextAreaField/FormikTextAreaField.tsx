import React from 'react';
import { useField, ErrorMessage } from 'formik'
import FieldLabel from 'src/components/fields/FieldLabel';
import TextArea from 'src/components/inputs/TextArea';
import { FormikContainer , EventError} from 'src/components/FormikFields/styled';

function FormikTextAreaField (props : any) {
  const [field, meta] = useField(props);
  return (
    <FormikContainer> 
      <FieldLabel htmlFor={props.name}>{props.label}</FieldLabel>
      <TextArea {...field} {...props} />
      {meta.touched && meta.error ? (
        <EventError>
          <ErrorMessage name={props.name} />
        </EventError>
      ) : null}
    </FormikContainer>
  );

}

export default FormikTextAreaField;
