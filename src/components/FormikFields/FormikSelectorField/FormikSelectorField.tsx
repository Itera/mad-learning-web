import React from 'react';
import { useField, ErrorMessage } from 'formik';
import FieldLabel from 'src/components/fields/FieldLabel';
import Select from 'src/components/inputs/Select';
import {
  FormikContainer,
  EventError,
} from 'src/components/FormikFields/styled';

function FormikSelectorField(props: any) {
  const [field, meta] = useField(props);
  const errorState = meta.touched && meta.error;

  return (
    <FormikContainer>
      <FieldLabel htmlFor={props.name}>{props.label}</FieldLabel>
      <Select {...field} {...props} errorState={errorState}>
        {props.options?.map((option: any, key: any) => (
          <option value={option} key={key}>
            {option}
          </option>
        ))}
      </Select>
      {errorState && (
        <EventError>
          <ErrorMessage name={props.name} />
        </EventError>
      )}
    </FormikContainer>
  );
}

export default FormikSelectorField;
