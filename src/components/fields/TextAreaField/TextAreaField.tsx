import React from 'react';

import FieldLabel from 'src/components/fields/FieldLabel';
import FieldWrapper from 'src/components/fields/FieldWrapper';
import TextArea from 'src/components/inputs/TextArea';

type CreateEventProps = {
  name: string;
  label: string;
  value: string;
  onChange: Function;
};

function TextAreaField({ name, label, value, onChange }: CreateEventProps) {
  return (
    <FieldWrapper>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <TextArea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FieldWrapper>
  );
}

export default TextAreaField;
