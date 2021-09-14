import React from 'react';

import FieldLabel from 'src/components/fields/FieldLabel';
import FieldWrapper from 'src/components/fields/FieldWrapper';
import TextArea from 'src/components/inputs/TextArea';

type TextAreaFieldProps = {
  name: string;
  label?: string;
  value: string;
  placeholder?: string;
  onChange: Function;
};

function TextAreaField({
  name,
  label,
  value,
  onChange,
  placeholder,
}: TextAreaFieldProps) {
  return (
    <FieldWrapper>
      {label && <FieldLabel htmlFor={name}>{label}</FieldLabel>}
      <TextArea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </FieldWrapper>
  );
}

export default TextAreaField;
