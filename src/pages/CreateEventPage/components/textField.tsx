import React from 'react';

function TextField({ id, name, label, value, onChange }) {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={name} type="text" value={value} onChange={onChange} />
      </>
    );
  }

  export default TextField