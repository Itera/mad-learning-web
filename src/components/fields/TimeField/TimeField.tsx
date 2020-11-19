import React from 'react';

import FieldLabel from 'src/components/fields/FieldLabel';
import FieldWrapper from 'src/components/fields/FieldWrapper';
import Input from 'src/components/inputs/Input';

type CreateEventProps = {
  name: string;
  label: string;
  value: string;
  onChange: Function;
};

export function TimeField({ name, label, value, onChange }: CreateEventProps) {
  return (
    <FieldWrapper>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <Input
        id={name}
        name={name}
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FieldWrapper>
  );
}

export default TimeField;
