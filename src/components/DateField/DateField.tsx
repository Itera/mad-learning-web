import React from 'react';
import { FieldWrapper, Input } from './styled';

type CreateEventProps = {
  name: string;
  label: string;
  value: string;
  onChange: Function;
};

function DateField({ name, label, value, onChange }: CreateEventProps) {
  return (
    <FieldWrapper>
      <label>
        {label}
        <Input
          name={name}
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </FieldWrapper>
  );
}

export default DateField;
