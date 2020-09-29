import React from 'react';
import { InputText } from './styled'

type CreateEventProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: Function;
  options? : string[];
}

export function InputField({id, name, label, type, value, onChange}: CreateEventProps) {
    return (
      <InputText>
        <label htmlFor={id}>{label}</label>
          <input id={id} name={name} type={type} value={value} onChange={(e) => onChange(e.target.value)}/>
      </InputText>
    );
  }

  export function TextArea({id, name, label, value, onChange}: CreateEventProps) {
    return (
      <InputText>
        <label htmlFor={id}>{label}</label>
          <textarea id={id} name={name} value={value} onChange={(e) => onChange(e.target.value)}/>
      </InputText>
    );
  }

  export function Select({id, name, label, value, onChange, options}: CreateEventProps) {
    return (
      <InputText>
        <label htmlFor={id}>{label}</label>
          <select id={id} name={name} value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="Choose event type" disabled>Choose event type</option>
            {options?.map((option => (
              <option value={option}>{option}</option>
            )))}
          </select>
      </InputText>
    );
  }
