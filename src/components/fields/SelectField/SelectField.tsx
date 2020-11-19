import React from 'react';

import FieldLabel from 'src/components/fields/FieldLabel';
import FieldWrapper from 'src/components/fields/FieldWrapper';
import Select from 'src/components/inputs/Select';

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
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <Select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options?.map((option, key) => (
          <option value={option} key={key}>
            {option}
          </option>
        ))}
      </Select>
    </FieldWrapper>
  );
}

export default SelectField;
