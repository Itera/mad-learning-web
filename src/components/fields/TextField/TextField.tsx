import React from 'react';

import FieldLabel from 'src/components/fields/FieldLabel';
import FieldWrapper from 'src/components/fields/FieldWrapper';
import Input from 'src/components/inputs/Input';

type TextFieldProps = {
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: Function;
};

function TextField({ name, label, value, placeholder, onChange }: TextFieldProps) {
  return (
    <FieldWrapper>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <Input
        id={name}
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </FieldWrapper>
  );
}
export default TextField;
