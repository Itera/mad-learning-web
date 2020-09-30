import React from 'react';
import { FieldWrapper, Input } from './styled';

type CreateEventProps = {
  name: string;
  label: string;
  value: string;
  onChange: Function;
};

export function TimeField({ name, label, value, onChange }: CreateEventProps) {
  return (
    <FieldWrapper>
      <label>
        {label}
        <Input
          name={name}
          type="time"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </FieldWrapper>
  );
}

export default TimeField;