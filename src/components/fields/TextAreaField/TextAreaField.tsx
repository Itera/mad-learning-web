import React from 'react';

import FieldLabel from 'src/components/fields/FieldLabel';
import FieldWrapper from 'src/components/fields/FieldWrapper';
import TextArea from 'src/components/inputs/TextArea';

type TextAreaFieldProps = {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  resize?: boolean;
  onChange: Function;
};

const TextAreaField = React.forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ name, value, label, placeholder, resize = true, onChange }, ref) => {
    return (
      <FieldWrapper>
        {label && <FieldLabel htmlFor={name}>{label}</FieldLabel>}
        <TextArea
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          resize={resize}
          onChange={(e) => onChange(e.target.value)}
          ref={ref}
        />
      </FieldWrapper>
    );
  }
);

export default TextAreaField;
