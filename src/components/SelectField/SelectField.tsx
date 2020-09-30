import React from 'react';
import { FieldWrapper, Select } from './styled';

type CreateEventProps = {
  name: string;
  label: string;
  value: string;
  onChange: Function;
  options?: string[];
};

function SelectField({
  name,
  label,
  value,
  onChange,
  options,
}: CreateEventProps) {
  return (
    <FieldWrapper>
      <label>
        {label}
        <Select
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="Choose event type" disabled>
            Choose event type
          </option>
          {options?.map((option, key) => (
            <option value={option} key={key}>
              {option}
            </option>
          ))}
        </Select>
      </label>
    </FieldWrapper>
  );
}

export default SelectField;
