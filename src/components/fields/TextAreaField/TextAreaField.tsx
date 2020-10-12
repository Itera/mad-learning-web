import React from 'react';

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
      <label>
        {label}
        <TextArea
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </FieldWrapper>
  );
}

export default TextAreaField;
